from django.shortcuts import render, redirect
from django.conf import settings
from .models import Package
from django.urls import reverse
from django.http import JsonResponse

import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY

def package_index(request):
    context = {}
    packages = Package.objects.all()
    
    stripe_pk = settings.STRIPE_PUBLIC_KEY
    stripe_sk = settings.STRIPE_SECRET_KEY
    stripe.api_key = stripe_sk

    return render(request, 'packages/packages.html', context)
    

def charge(request):
	amount = 5
	if request.method == 'POST':
		print('Data:', request.POST)

	return redirect(reverse('success', args=[amount]))


def successMsg(request, args):
	amount = args
	return render(request, 'packages/success.html', {'amount':amount})

