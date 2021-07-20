
var i;
var audio = new Audio('audio/HappyBirthdaySong.mp3');

function open_curtain() {

    $("#curtain1").animate({ width: 20 }, 1000);
    $("#curtain2").animate({ width: 20 }, 1000);
    $('.clickBtn').fadeOut(600);
    audio.play();

}

function openModal() {
    audio.pause();
    audio.currentTime = 0;
    debugger
    var vid = document.getElementById("myVideo");
    vid.play();
}