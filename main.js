img="";
Status=""
objects=[];
function start() {
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Satus : detecting objects";
}
function draw(){
    image(video,0,0,380,380);
    if(Status !="")
    {
        r= random(255);
        g=random(255);
        b=random(255);
        objectdetector.detect(video,gotResult)
        for(i = 0; i<objects.length; i++){

            document.getElementById("status").innerHTML="status : object detected"
            document.getElementById("number_of_objects").innerHTML="number of objects are detected are :"+objects.length
            fill(r,g,b);
            percent=floor(objects[i].confidence*100)
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill();
            stroke(r,g,b)
            rect(objects[i].x,objects[i].y,objects[i].height,objects[i].width)
        }
    }
}
function preload(){
    img=loadImage('https://th.bing.com/th/id/OIP.Kqi_30fjzB4wVSJv6beVMAHaHA?w=215&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7.png');
}
function setup(){
    canvas = createCanvas(380,380,)
    canvas.center();
    video= createCapture(VIDEO)
    video.size(380,380)
    video.hide();
}
    function modelLoaded(){
        console.log("Model LOADED")
        Status=true;
        objectdetector.detect(video,gotResult)
    }
    function gotResult(error,results){
        if (error){
            console.log(error)
        }
        console.log(results);
        objects=results;
        }