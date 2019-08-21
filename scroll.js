//плавная прокрутка с отступом https://delay-delo.com/index.php/content/plavnaya-prokrutka-k-yakoryu-s-otstupom-sverhu
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      headerHeight = $('#main_header').height() + 1;
      headerHeight = 73;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 900, function() {
          target.focus();
        });
        return false;
      }
     }
   });