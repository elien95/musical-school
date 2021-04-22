import './scss/style.scss';
import './css/style.css';
//import 'bootstrap-v4-rtl/dist/css/bootstrap.min.css';
import '../node_modules/@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
//import { event } from 'jquery';
import  'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js'







$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();


 $('.add-to-card-btn').click(function(){
     alert("أضيف المنتج إلى عربة الشراء");
 });



 $('copyright').text("  جميع الحقوق محفوظة للمتجر سنة "+new Date().getFullYear);

/*
 var items = document.getElementsByTagName('input');
 for (var i = 0; i < items.length; i++) {
   items[i].onclick = function(e) {
     alert('clicked');
     console.log('clicked', e.target.value);
   };
 }*/
 
/* var rad = document.formy.size;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            prev = this;
        }*/
        $('.product-option input[type="radio"]').change(function(){
            $(this).parents('.product-option').siblings().removeClass('active');
            $(this).parents('.product-option').addClass('active');
        });
        

 /*   });*/



  $('[data-product-quantity]').change(function() {
      
    
    var newQuantity = $(this).val();

    var $parent = $(this).parents('[data-product-info]');

    var pricePerUnit = $parent.attr('data-product-price');

    var totalPriceForProduct = newQuantity * pricePerUnit;

    $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

    // حدث السعر الإجمالي لكل المُنتجات
    calculateTotalPrice();
});


$('[data-remove-from-cart]').click(function() { 
    $(this).parents('[data-product-info]').remove();

    // أعد حساب السعر الإجمالي بعد حذف أحد المُنتجات
    calculateTotalPrice();
});


function calculateTotalPrice() {
      
    var totalPriceForAllProducts = 0;

    $('[data-product-info]').each(function() {

        var pricePerUnit = $(this).attr('data-product-price');

        var quantity = $(this).find('[data-product-quantity]').val();

        var totalPriceForProduct = pricePerUnit * quantity;

        // أضف السعر الإجمالي لهذا المنتج إلى السعر الإجمالي لكل المُنتجات، واحفظ القيمة في المتغير نفسه
        totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);
    });

      // حدث السعر الإجمالي لكل المُنتجات في الصفحة
    $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
  }

 


    
  var citiesByCountry = {
    sa: ['الرياض','جدة'],
    eg: ['القاهرة','الإسكندرية'],
    jo: ['عمان','الزرقاء','اربد'],
    sy: ['دمشق','حلب','حماه']
};

  $('#form-checkout select[name="country"]').change(function() {
    var country = $(this).val();
    var cities = citiesByCountry[country];
    $('#form-checkout select[name="city"]').empty();
    $('#form-checkout select[name="city"]').append(
        '<option disabled selected value="">اختر المدينة</option>'
    );

   
    cities.forEach(function(city) {
      var newOption = $('<option></option>');
      newOption.text(city);
      newOption.val(city);
      $('#form-checkout select[name="city"]').append(newOption);
    });
  });


  //...................................
  $('#form-checkout input[name="payment_method"]').change(function() {

    var paymentMethod = $(this).val();

    if (paymentMethod === 'on_delivery') {

      // إذا كانت عند الاستلام، فعطّل حقول بطاقة الائتمان
      $('#credit-card-info input').prop('disabled', true);

    } else {

      // وإلا ففعلّها
      $('#credit-card-info input').prop('disabled', false);
    }
  
    // بدل معلومات بطاقة الائتمان بين الظهور والإخفاء
    $('#credit-card-info').toggle();
  });

  ///********************************** 
  $("#price-range").slider({
    range:true,
    min:50,
    max:1000,
    step:50,
    values:[250,800],
    slide:function(event,ui) {
      $('#price-min').text(ui.values[0]);
      $('#price-max').text(ui.values[1]);
    }

  })
});