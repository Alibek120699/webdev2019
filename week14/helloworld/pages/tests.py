from django.test import TestCase
from django.test import SimpleTestCase # if we don't use any database

class SimpleTests(SimpleTestCase):
	def test_home_page_status_code(self):
		response = self.client.get('/pages/home/')
		self.assertEqual(response.status_code, 200)

	def test_about_page_status_code(self):
		response = self.client.get('/pages/about/')
		self.assertEqual(response.status_code, 200)