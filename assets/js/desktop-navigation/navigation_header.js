//<![CDATA[

jQuery(function () {

  jQuery(window).scroll(function () {
    var Ms = document.getElementById("main-section").offsetHeight;
    var Hs = document.getElementById("header-section").offsetHeight;
    var headerS = $("#header-section");
    var headerT = $(".mp-header-transparent");

    if (jQuery(this).scrollTop() > Ms -Hs) {
      headerT.addClass("mp-header-bg");
      headerS.removeClass("mp-header-transparent");
    } else {
      headerT.removeClass("mp-header-bg");
      headerS.addClass("mp-header-transparent");
    }

  });
});

//]]>
