document.getElementById("submit").disabled = true;

stripeElements();

function stripeElements() {
  stripe = Stripe('pk_test_E52Nh0gTCRpJ7h4JhuEX7BIO006LVew6GG');

  if (document.getElementById('card-element')) {
    let elements = stripe.elements();

    // Card Element styles
    let style = {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };


    card = elements.create('card', { style: style });

    card.mount('#card-element');

    card.on('focus', function () {
      let el = document.getElementById('card-errors');
      el.classList.add('focused');
    });

    card.on('blur', function () {
      let el = document.getElementById('card-errors');
      el.classList.remove('focused');
    });

    card.on('change', function (event) {
      displayError(event);
    });
  }
  //we'll add payment form handling here
}

function displayError(event) {
 
  let displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
}

function planSelect(name, price, priceId) {
  var inputs = document.getElementsByTagName('input');

  for(var i = 0; i<inputs.length; i++){
    inputs[i].checked = false;
    if(inputs[i].name== name){

      inputs[i].checked = true;
    }
  }

  var n = document.getElementById('plan');
  var p = document.getElementById('price');
  var pid = document.getElementById('priceId');
  n.innerHTML = name;
  p.innerHTML = price;
  pid.innerHTML = priceId;
      document.getElementById("submit").disabled = false;


}
