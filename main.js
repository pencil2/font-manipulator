function setup () {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}
function gotPoses() {

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x
    difference = floor(leftWristX - rightWristX);
    
}
function draw() {
    background('#969a97');
    textSize(10);
    fill('FFE787')
    text('Me', 50, 400);
    
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')

leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        textSize(10);
        fill('FFE787')
        text('Me', 50, 400);
        
    }
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height Of A Square Will Be = " + difference +"px";
     fill('F80093');
     stroke('#F90093');
     text('Me', 50, 400);
}
