from django.shortcuts import render
from django.conf import settings
from django.urls import reverse
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY

def index(request):
	return render(request, 'packages/packages.html')

def success(request):\
	return render(request, 'packages/success.html')

