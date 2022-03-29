from django.shortcuts import render, redirect, reverse
from django.contrib import messages

from .forms import OrderForm


def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")
        return redirect(reverse('products'))

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51KQWDuHceepjXSMUIsNMqITb66kD7Du7hnixo0Qu6OudcFVXeffdLPhgwB3HxOTnbMPViv7c4FG4h7MfN3GhIDAL00MMR88F8W',
        'client_secret': 'test client secret',
    }

    return render(request, template, context)
