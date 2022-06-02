const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 200;
const height = canvas.height = 30;

//characteristics of the healthbar
canvas.style.marginRight;
//How much health is in the healthbar
let health = 50;
const healthBarWidth = 200;
const healthBarHeight= 30;
//centers the healthbar ontop of the window
const x = width / 2 - healthBarWidth / 2;
const y = height / 2 - healthBarHeight / 2;
const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");
//making the healthbar change the amount of health left

function frame()
{
    context.clearRect(0, 0, width, height);
    healthBar.show(context);
    requestAnimationFrame(frame);
}
//what to do when the button is clicked
function getHurtImage()
{
     var hurtImageLocation = "hurt.jpg";
     document.getElementById("hit").src = hurtImageLocation;
}
function play()
{
    var HitDie = Math.ceil(Math.random() * 20);
    var ArmorClass = Math.ceil(Math.random() * 20);

    var difference = HitDie - ArmorClass;
//displays what number was rolled on each die
     document.getElementById("D20").innerHTML = "HitDie =" + HitDie;
     document.getElementById("AC").innerHTML = "AC =" + ArmorClass;
//if the difference is more than 0 then it is a hit
     if(difference >= 0)
     {
        document.getElementById("DC").innerHTML = "Hit";
        //makes the healthbar decrease when the result is higher than -1. Working on a picture to show up when there is no health left
        health -= difference;
        healthBar.updateHealth(health);
        getHurtImage();
     }
//if the difference is less than 0 then its a miss and nothing happens. I tried to get a picture to show up for a miss but i couldnt figure it out. 
     else
     {
        document.getElementById("DC").innerHTML = "Miss";
     }
}
frame();