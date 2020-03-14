from django.contrib.auth import get_user_model
from django.test import Client, TestCase
from django.urls import reverse
from api.models import Post

class BlogTest(TestCase):
	def setUp(self):
		self.user = get_user_model().objects.create_user(
			username = 'testuser',
			email = 'test@gmail.com',
			password = 'secret'
		)

		self.post = Post.objects.create(
			title = 'test title',
			body = 'test body',
			author = self.user
		)

	def test_string_representation(self):
		post = Post.objects.get(title='test title')
		self.assertEqual(str(post), post.title)

	def test_post_content(self):
		self.assertEqual(f'{self.post.title}', 'test title')
		self.assertEqual(f'{self.post.body}', 'test body')
		self.assertEqual(f'{self.post.author}', 'testuser')

	def test_post_list_view(self):
		response = self.client.get(reverse('home'))
		self.assertEqual(response.status_code, 200)
		self.assertContains(response, 'test body')
		self.assertTemplateUsed(response, 'home.html')

	def test_post_detail_view(self):
		response = self.client.get('/api/posts/1/')
		no_response = self.client.get('/api/posts/10000/')
		self.assertEqual(response.status_code, 200)
		self.assertEqual(no_response.status_code, 404)
		self.assertContains(response, 'test body')
		self.assertTemplateUsed(response, 'post_detail.html')

	def test_get_absolute_url(self):
		self.assertEqual(self.post.get_absolute_url(), '/api/posts/1/')

	def test_post_create_view(self):
		response = self.client.post(reverse('post_new'), {
				'title': 'New title',
				'body': 'New body',
				'author': self.user
		})
		self.assertEqual(response.status_code, 200)
		self.assertContains(response, 'New body')
		self.assertContains(response, 'New title')

	def test_post_update_view(self):
		response = self.client.post(reverse('post_edit', args='1'), {
				'title': 'Updated title',
				'body': 'Updated body'
		})
		self.assertEqual(response.status_code, 302)

	def test_post_delete_view(self):
		response = self.client.get(
			reverse('post_delete', args='1'))
		self.assertEqual(response.status_code, 200)