//<![CDATA[

$("#menu-hamburguer").click(function () {
     if($("#menu-hamburguer").is(':checked')){
       $("#mobile-navigation").css({
           "opacity": "1",
           "visibility": "visible"
       });

       $("#mobile-navigation ul").css({
           "height": "100vh",
       });
     }
     else{
          $("#mobile-navigation").removeAttr("style");
          $("#menu-hamburguer").checked = false;

          $("#mobile-navigation ul").css({
              "height": "0",
          });
     }
});

//]]>
