$(document).on("ready", function() {
     
    function scrollToAnchor(aid){
        const destination = $('#' + aid);
        $('html,body').animate({
            scrollTop: destination.offset().top
        },1000);
    }
   
 
  $("[name='s1-link']").on('click', function(){        scrollToAnchor('signup');
    });
   
   $("[name='s3-link']").on('click', function(){
scrollToAnchor('s4');
    });


 $("[name='tooltip-link']").on('click', function(){        scrollToAnchor('tooltip');
    });

 $("[name='tooltip-bottom-link']").on('click', function(){        scrollToAnchor('tooltip-bottom');
    });
  
});