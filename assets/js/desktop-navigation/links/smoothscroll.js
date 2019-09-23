//<![CDATA[

  var headerHeight = $("#header-section").height();

// animação scroll quando se clica no menu

$('.nav a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $('#' +$(this).data('section')).offset().top - headerHeight // ir para a secção cujo o id é o valor do atributo `data-section` do item do menu onde clicamos
  }, 500);
});

var alturas = {};
$('.section').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top - headerHeight -1; // ex: alturas['section_2'] = 600
});

// quando fazemos scoll vamos percorrer o nosso obj alturas e comparar a altura de cada secção com o que já andamos em scroll

$(window).on('scroll', function() {
  for(var seccao in alturas) {
    if($(window).scrollTop() >= alturas[seccao]) {
      $('.nav a[href^="#"]').removeClass('active');
      $('.nav a[href^="#"][data-section="' +seccao+ '"]').addClass('active'); 
    }
  }
});

//]]>
