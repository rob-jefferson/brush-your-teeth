//Custom audio controls
var myAudio = document.getElementById("gettoothbrush");

function playAudio() {
    if (myAudio.paused) 
        myAudio.play();
}

// Custom video controls
var myVideo = document.getElementById("toothbrush");

function playPause() {
    if (myVideo.paused) {
        document.getElementById("playpause").innerHTML = "Pause";
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
        document.getElementById("playpause").innerHTML = "Play";
        myVideo.pause();
    }
}

function restart() {
    myVideo.currentTime = 5;
    if (myVideo.paused) {
        document.getElementById("playpause").innerHTML = "Pause";
        myVideo.play();
    }
}