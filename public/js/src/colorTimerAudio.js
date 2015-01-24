var audio = document.getElementById("myAudio");
// console.log(audio);

audio.ontimeupdate = function() {audioPositionChanged()};
var audioPos = 0;

// get position of the audio
// change the background color of the document based off the position
function audioPositionChanged() {
    // Display the current position of the video in a p element with id="demo"
    audioPos = audio.currentTime
    // console.log(audioPos);
    colorChange("red", 1);
    colorChange("blue", 2);
}


function colorChange ( color, position){
	if (audioPos > position){
		document.body.style.backgroundColor=color;
	}
}

audio.onended = function() {
    document.body.style.backgroundColor="white";
};
