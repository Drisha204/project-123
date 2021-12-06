function setup()
{
    video =createCapture(VIDEO);
    video.size(700,700);

    canvas=createCanvas(750,500);
    canvas.position(900,150);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded()
{
console.log('model is loaded');

}
function gotposes(results)
{
if (results.length>0)
{
console.log(results);
}
}
function draw()
{
    background('#05ffa1');
}