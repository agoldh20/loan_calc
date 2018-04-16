var app = new Vue({
  el: '#app',
  data: {
    principal: '',
    length: '',
    apr: '',
    calculateAmount: ''
  },
  computed: {
    calculateAmount: function(e){
      var principal = this.principal;
      var apr = this.apr / 1200.0;
      var length = this.length;
      var i = Math.pow((1+apr),length);
      var payment = ( principal * apr * i) / (i - 1) || 0;
      return currencyFormat(payment);
    },
    
  }
  
});


//https://blog.tompawlak.org/number-currency-formatting-javascript
function currencyFormat (num) {
    return "$" + num.toFixed(2)
}