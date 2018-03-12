var audio_player = $("#audio_player")[0];

$(".audio-div").click(function() {
  var audio = $(this).attr('play');
  if (audio_player.src == document.URL + audio && !audio_player.paused) {
    audio_player.pause();
  } else {
    audio_player.src = audio;
    audio_player.play();
  }
});
