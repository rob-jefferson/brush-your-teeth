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
        document.getElementById("playpause").innerHTML = "&#9208;";
        myVideo.play();
    }

    else {
        document.getElementById("playpause").innerHTML = "&#9654;";
        myVideo.pause();
    }
}

function restart() {
    myVideo.currentTime = 5;
    if (myVideo.paused) {
        document.getElementById("playpause").innerHTML = "&#9208;";
        myVideo.play();
    }
}