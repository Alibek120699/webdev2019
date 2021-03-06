from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from users.models import CustomUser

class CustomUserCreationForm(UserCreationForm):
	class Meta(UserCreationForm.Meta):
		model = CustomUser
		# fields = UserCreationForm.Meta.fields
		fields = ('username', 'email')

class CustomUserChangeForm(UserChangeForm):
	class Meta(UserChangeForm.Meta):
		model = CustomUser
		# fields = UserChangeForm.Meta.fields
		fields = ('username', 'email')