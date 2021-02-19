/**
  *Lab 11: Libraries and jQuery
  *Author: Katelyn Brooks
  *Created:2 17 2021
  *License: Public Domain
**/

$("#challenges").append("<button id ='cbutton'>Change Color</button>");
$("#problems").append("<button id ='pbutton'>Change Color</button>");
$("#results").append("<button id ='rbutton'>Change Color</button>");

$("#cbutton").click(function(){
  // $("#challenges").toggleClass("special");
  //or
  $(this).parent().toggleClass("special");
});

$("#pbutton").click(function(){
  // $("#challenges").toggleClass("special");
  //or
  $(this).parent().toggleClass("special");
});

$("#rbutton").click(function(){
  // $("#challenges").toggleClass("special");
  //or
  $(this).parent().toggleClass("special");
});
