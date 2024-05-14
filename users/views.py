from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required
from .helpers import validate_form
from users.models import CustomUser


def welcome(request):
    return HttpResponse('welcome')


def register(request):
    if request.method == 'POST':
        data = {
            'email': request.POST.get('email'),
            'password': request.POST.get('password'),
            'confirm_password': request.POST.get('confirm_password')
        }
        required_fields = ['email', 'password', 'confirm_password']
        password_fields = ('password', 'confirm_password')
        errors = validate_form(data, required_fields, password_fields)
        if errors:
            for error in errors:
                messages.error(request, error)
            return redirect('signup')
        email = data['email']
        password = data['password']

        user = CustomUser.objects.create_user(email=email, password=password)
        print('user : ',user)
        messages.success(request, 'Signup successful!')
        return redirect('signIn')

    else:
        return render(request, 'signup.html')

@never_cache
def signIn(request):
    if request.user.is_authenticated:
        return redirect('chat')
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print('email :',email,'password : ',password)

        user = authenticate(request,email=email,password=password)
        print('user :',user)
        if user is not None:
            return redirect('chat')
        else:
            messages.error(request,'Invalid Email or Password')
            return redirect('signIn')
    return render(request, 'login.html')

def signout(request):
    logout(request)
    request.session.flush()
    messages.success(request, "Logged Out Successfully!!")
    return redirect('signIn')

def chat(request):
    return render(request,'chat.html')
