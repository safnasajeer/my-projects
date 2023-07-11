let plaeyBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');
let isVideoPlaying = false;
let progressBar = document.querySelector('.progress-bar')
let progressRange = document.querySelector('.progress-range')
//Let's Play or Pause the video
function playOrPause(event) {
    console.log(event);
    if (!isVideoPlaying) {
        video.play();//in build function
        isVideoPlaying = true;
        plaeyBtn.classList.replace('fa-play', 'fa-pause');
        // progressBar.style.cssText='width:100px';
    } else {
        video.pause();//in build function
        isVideoPlaying = false;
        plaeyBtn.classList.replace('fa-pause', 'fa-play');

    }
    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            playOrPause();
        }
    }

}

function updateProgressBar(event) {
    // progressBar.style.cssText= `width: ${event.target.currentTime}px`;
    if (!isNaN(event.target.duration)) {
        // use percent_complete to draw a progress bar
        //we can  use separate variables for these values but i m not using this concept now
        progressBar.style.cssText = `width: ${(event.target.currentTime / event.target.duration) * 100}%`;


        // var percent_complete = (event.target.currentTime / event.target.duration)*100;
        // progressBar.style.cssText= `width: ${percent_complete}%`;
    }

}
function updateSeekBar(even) {
    // console.log(even);
    let currentPoint = even.offsetX;
    let progressBarWidth = this.clientWidth;// changed event.target =>this ie;Lhs= this aanu
    //id matiyillengil backward seek cheyyumbol
    // progress range nu pakram progrees bar update funtion caal cheyyum.
    let currentRange = (currentPoint / progressBarWidth) * video.duration
    //video.duration :video-duration kodukkunnad ethramathe secondil nammal click cheidu enn kanikkananu
    video.currentTime = currentRange;
    // console.log(video.currentTime)


//soln 2:
    //ivide progressBarWidth direct kittan namuk oru Dom property usiyya
    let progressCurrentRange=progressRange.getBoundingClientRect();
    console.log(progressCurrentRange.width)
    //give the value instead of this.clientWidth;

}
// add event listeners
plaeyBtn.addEventListener('click', playOrPause)
video.addEventListener('click', playOrPause)
video.addEventListener('timeupdate', updateProgressBar)
progressRange.addEventListener('click', updateSeekBar)

video.addEventListener("keypress", function (event) {
    if (event.key === "space") {
        event.preventDefault();
        addBtn.click();

    }
});

//this outside any funtction kodthal consolik orintiida window object kittum
//function nu ullil ane event.target nu = aanu