objects=[];
status="";
function setup()
{
canvas=createCanvas(550,420);
canvas.center();

}
function preload()
{
video=createVideo("video.mp4");
video.hide();
}
function draw()
{
image(video,0,0,550,420); 
if(status!="")
{
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++)
{
document.getElementById("status").innerHTML="status:objects DETECTED🙏😁😃😄😊 O(∩_∩)O";
document.getElementById("nob").innerHTML="number of objects= "+objects.length;
stroke("#FF0000");
XDjamez=floor(objects[i].confidence*100); 
text(objects[i].label+""+XDjamez+"%",objects[i].x,objects[i].y);
noFill();
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}



}
}
function gotResult(error,results)
{
if(error)
{
console.log(error);
}
else
{
console.log(results);
objects=results;
}


}
function start()
{
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status-detecting objects 🧨";
}

function modelLoaded()
{
console.log("coco-ssd has loaded😀")
status=true;
video.loop();
video.speed(1);
video.volume(0);
}




