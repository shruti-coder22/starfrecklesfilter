x = 0;
y = 0;
 
 
function preload() {
    filter = loadImage("https://i.postimg.cc/kX7wqJqh/filter.jpg");
}
 
function setup() {
    var canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
 
    poseNet_var = ml5.poseNet(video, modelLoaded);
    poseNet_var.on("pose", gotPoses);
}
