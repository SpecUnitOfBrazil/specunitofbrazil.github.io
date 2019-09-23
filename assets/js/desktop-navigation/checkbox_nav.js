//<![CDATA[

$("#menu-hamburguer").click(function () {
     if($("#menu-hamburguer").is(':checked')){
       $("#mobile-navigation").css({
           "opacity": "1",
           "visibility": "visible"
       });

       $(".grid-header-mobile-nav").css({
           "height": "100vh",
           "overflow-y": "scroll",
       });
       $("#header-section").addClass("trigger_active");
     }
     else{
          $("#mobile-navigation").removeAttr("style");
          $("#menu-hamburguer").checked = false;

          $(".grid-header-mobile-nav").css({
              "height": "0",
          });
          $("#header-section").removeClass("trigger_active");
     }
});

//]]>
