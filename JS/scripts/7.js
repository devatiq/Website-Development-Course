/*
- JavaScript Math
 -- Math.round()
 -- Math.ceil()
 -- Math.floor()
 -- Math.trunc()
 -- Math.sign()
 -- Math.pow(x, y)
 -- Math.sqrt()
 -- Math.random()

 - JavaScript Use Strict

 - JavaScript Arrow Function

 - Usages of jQuery
  -- Getting Started
  -- Syntax & Selector
  -- Hide and Show
  -- Slide / fade
  -- Add / Remove classes
*/

"use strict";

//let x = -4.2;
//let y  = Math.floor(Math.random() * 100) + 1;
//document.getElementById('jstut').innerHTML = y;

/*
let myFun;
myFun = para => "Hello World 2" + ' ' + para;

document.getElementById('jstut').innerHTML = myFun("Again");

$(document).ready(function(){
  $('p').click(function(){
    $(this).hide();

  })
});
*/
/*
$(document).ready(function(){

  $('#btn1').click(function(){
    $('#p1').hide();
  });

  $('#btn2').click(function(){
    $('#p2').show();
  });

});


$(document).ready(function(){

$('#btn2').click(function(){
  $('#p2').fadeIn(2000);
});

});

$(document).ready(function(){

  $('#btn1').click(function(){
    $('#p1').fadeOut(2000);
  });
  
  });

  $(document).ready(function(){

    $('#btn1').click(function(){
      $('#p1').fadeToggle(500);
    });
    
    });



    $(document).ready(function(){
      $('.accortit').click(function(){
        $('.accorcnt').slideToggle(500);
      });    
    });

    $(document).ready(function(){
      $('.accortit').click(function(){
        $(this).next('.accorcnt').slideToggle(500);
      });    
    });
      */

    $(document).ready(function(){

      $('#btn3').click(function(){
        $('#p3').toggleClass('red');
      });   

    });













