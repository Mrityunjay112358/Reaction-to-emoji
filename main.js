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