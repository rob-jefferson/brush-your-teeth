//Custom audio controls
var myAudio = document.getElementById("gettoothbrush");

function playAudio() {
    if (myAudio.paused) 
        myAudio.play();
}

// Custom video controls
var myVideo = document.getElementById("toothbrush");
var playIcon = "<i class='fas fa-play-circle'></i>";
var pauseIcon = "<i class='fas fa-pause-circle'></i>";

function playPause() {
    if (myVideo.paused) {
        document.getElementById("playpause").innerHTML = pauseIcon;
        myVideo.play();
        if (myVideo.requestFullscreen) {
            myVideo.requestFullscreen({ navigationUI: "hide" })
                .then({}).catch(err => {
                    alert(`An error occurred while trying to switch into full-screen mode: ${err.message} (${err.name})`);
              });
              screen.orientation.lock("landscape-primary");
        };
    }

    else {
        document.getElementById("playpause").innerHTML = playIcon;
        myVideo.pause();
    }
}

function restart() {
    myVideo.currentTime = 5;
    if (myVideo.paused) {
        document.getElementById("playpause").innerHTML = pauseIcon;
        myVideo.play();
        if (myVideo.requestFullscreen) {
            myVideo.requestFullscreen({ navigationUI: "hide" })
                .then({}).catch(err => {
                    alert(`An error occurred while trying to switch into full-screen mode: ${err.message} (${err.name})`);
              });
              screen.orientation.lock("landscape-primary");
            };
    }
}