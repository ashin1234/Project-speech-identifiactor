x = 0;
y = 0;
screen_width = "";
screen_height = "";
draw_apple = "";
to_number = 0;
draw_apple = "";
speak_data = "";


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
document.getElementById("status").innerHTML = "System is listening please speak!!";
recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    to_number = Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognised as: " + content;
    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML = "Started drawing an apple ";
        draw_apple = "set";
    }else {
        document.getElementById("status").innerHTML = "The speech has not recognised  ";
    }
}
function preload(){
   apple = loadImage("Apple.png");
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(50,100);
}

function draw() {
    if(draw_apple == "set")
    {
        for(var i = 1; i<=to_number;i++){
            x = Math.floor(Math.random * 700);
            y = Math.floor(Math.random * 400);
            image(apple,x,y,100,100);
        }
        document.getElementById("status").innerHTML = "Apple is drawn. ";
        draw_apple = "";
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data = to_number + "Apple is drawn";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}