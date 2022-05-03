document.getElementById("submit").disabled = true;

stripeElements();

function stripeElements() {
  stripe = Stripe('STRIPE_PRIVATE_KEY');

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
  var a = '<a href="https://buy.stripe.com/test_7sI3fZchTaAGd3yfYZ"  class="shop-now-button btn btn-lg rounded-0 text-uppercase py-3">fitness</a>';
  var b = '<a href="https://buy.stripe.com/test_cN2dUD4Pr6kqfbG8ww"  class="shop-now-button btn btn-lg rounded-0 text-uppercase py-3">both</a>';

  if (price == '£15.99 GBP/month') {
    price = a;
  } else {
    price = b;
  }
    

  n.innerHTML = name;
  p.innerHTML = price;
  pid.innerHTML = priceId;
}

// static/main.js

console.log("Sanity check!");

// new
// Get Stripe publishable key
fetch("/config/")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  const stripe = Stripe(data.publicKey);
});


// static/main.js

console.log("Sanity check!");

// Get Stripe publishable key
fetch("/config/")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  const stripe = Stripe(data.publicKey);

  // new
  // Event handler
  let submitBtn = document.querySelector("#submitBtn");
  if (submitBtn !== null) {
    submitBtn.addEventListener("click", () => {
    // Get Checkout Session ID
    fetch("/create-checkout-session/")
      .then((result) => { return result.json(); })
      .then((data) => {
        console.log(data);
        // Redirect to Stripe Checkout
        return stripe.redirectToCheckout({sessionId: data.sessionId})
      })
      .then((res) => {
        console.log(res);
      });
    });
  }
});
