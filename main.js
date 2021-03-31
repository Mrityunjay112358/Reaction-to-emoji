prediction1="";
prediction2="";

Webcam.set({
    width:300,
    height:300,
    image_format:"jpeg",
   jpeg_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function capture_image(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'>";
});

}


console.log("ml5 version"+ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3BnUz0XvX/model.json',modelLoaded)


function modelLoaded(){
    console.log("model loaded");
}

function speak(){
     synth = window.speechSynthesis;
speak_data="The First Prediction Is "+prediction1;
speak_data2="And The Second Prediction Is"+prediction2;
utterThis = new SpeechSynthesisUtterance(speak_data+speak_data2);
synth.speak(utterThis);
}

function predict_emotion(){
img = document.getElementById("captured_img");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    prediction1=results[0].label;
prediction2 = results[1].label;
document.getElementById("emotion_prediction_1").innerHTML=prediction1;
document.getElementById("emotion_prediction_2").innerHTML=prediction2;

speak();

if(prediction1 == "Cool"){
    document.getElementById("emoji_prediction_1").innerHTML="&#129311;";
}
if(prediction1 == "Awesome"){
    document.getElementById("emoji_prediction_1").innerHTML="&#128076;";
}
if(prediction1 == "Thumbs Up"){
    document.getElementById("emoji_prediction_1").innerHTML="&#128077;";
}
if(prediction2 == "Cool"){
    document.getElementById("emoji_prediction_2").innerHTML="&#129311;";
}
if(prediction2 == "Awesome"){
    document.getElementById("emoji_prediction_2").innerHTML="&#128076;";
}
if(prediction2 == "Thumbs Up"){
    document.getElementById("emoji_prediction_2").innerHTML="&#128077;";
}
}
}
