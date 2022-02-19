x = 0;
y = 0;
screen_width = "";
screen_height = "";
draw_apple = "";
to_number = 0;
apple = "";
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
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_apple == "set")
    {
        for(var i = 1; i<=to_number;i++){
            x = Math.floor(Math.random * 900);
            y = Math.floor(Math.random * 600);
            image(apple,x,y,50,50);
        }
        document.getElementById("status").innerHTML = "Apple is drawn. ";
        draw_apple = "";
    }
}