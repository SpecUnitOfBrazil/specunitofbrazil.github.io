
                    //<![CDATA[
                      var tag = document.createElement('script');
                      tag.src = "http://www.youtube.com/player_api";
                      var firstScriptTag = document.getElementsByTagName('script')[0];
                      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    
                            var player;
                            function onYouTubePlayerAPIReady() {
                              $youtube_player_height = $height = (jQuery(window).height())*60/100;
                              $youtube_player_width = $width = (jQuery(window).width());

                              player = new YT.Player('player', {
                                height: $height+'px',
                                width: $width+'px',
                                videoId: 'CNJnBdrDrnU',
                                playerVars: {
                                  'enablejsapi': 1,
                                  'autoplay': 1,
                                  'controls': 0,
                                  'rel': 0,
                                  'loop': 1,
                                  'showinfo': 0,
                                },
                                events: {
                                  'onReady': onPlayerReady,
                                }
                              });
        
                            }
                        
                            function onPlayerReady(event) {
                              event.target.mute();
                            }
                    //]]>
