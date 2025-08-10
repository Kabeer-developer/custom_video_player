const video = document.getElementById("video");
const playPause = document.getElementById("playPause");
const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");
const volume = document.getElementById("volume");

playPause.addEventListener("click", ()=> {
if(video.paused) {
    video.play();
    playPause.textContent = "Pause"
}
else {
    video.pause();
    playPause.textContent = "Play"
}
});

video.addEventListener("timeupdate", ()=> {
    const percent = (video.currentTime / video.duration) *100;
    progressBar.style.width = percent + "%";
});

progressContainer.addEventListener("click", (e)=> {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;
    video.currentTime = (clickX / width) * duration;
});

volume.addEventListener("input", ()=> {
    video.volume = volume.value;
});