var playPause = document.getElementById("playPauseBtn");
var theSong = document.getElementById("song");

var stopSong = document.getElementById("stopBtn");



playPause.onclick = function ()
{
if(playPause.classList.contains("fa-pause"))
{
theSong.pause();
playPause.classList.remove("fa-pause");
playPause.classList.add("fa-play");
}else{
    theSong.play();
    playPause.classList.add("fa-pause");
playPause.classList.remove("fa-play");
}
}
