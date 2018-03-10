var audio_player = document.getElementById("audio_player");

function playAudio($file) {
  if (audio_player.src == document.URL + $file && !audio_player.paused) {
    audio_player.pause();
  } else {
    audio_player.src = $file;
    audio_player.play();
  }
}
