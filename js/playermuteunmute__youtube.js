//<![CDATA[

jQuery(".video_metadata").on("click", ".mute-button", function(){
  if(player.isMuted()){
    player.unMute();
  }
  else {
    player.mute();
  }
 });

//]]> 
