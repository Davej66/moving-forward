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
    var a = '<a href="https://buy.stripe.com/test_7sI3fZchTaAGd3yfYZ" target="_blank" class="shop-now-button btn btn-lg rounded-0 text-uppercase py-3">fitness</a>';
    var b = '<a href="https://buy.stripe.com/test_cN2dUD4Pr6kqfbG8ww" target="_blank" class="shop-now-button btn btn-lg rounded-0 text-uppercase py-3">both</a>';
  
    //if (price == '£15.99 GBP/month') {
      //price = a;
    ///} else {
    //  price = b;
    //}
      
  
    n.innerHTML = name;
    p.innerHTML = price;
    pid.innerHTML = priceId;
    
        //document.getElementById("submit").disabled = True;
  
        <form action="/create-checkout-session" method="POST">
      <!-- Note: If using PHP set the action to /create-checkout-session.php -->

      <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
      <button type="submit">Checkout</button>
    </form>
  
  
  //}