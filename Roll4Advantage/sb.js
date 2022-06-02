function whileDogs() 
{
    var currTime = 10;
    var i = 1;
    while (i < 12) 
    {
        if (i == 11) 
        {
            setTimeout(function () 
            {
                var dogImageLocation = "pumpkin.jpeg";
                document.getElementById("happy").src = dogImageLocation;
                document.getElementById("countdownTimer").innerHTML = "Here's a puppy!"
            }, 1000 * i);
        } 
        else if (i > 6) 
        {
            setTimeout(function () 
            {
                document.getElementById("countdownTimer").innerHTML =
                    "Happy Time " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } 
        else 
        {
            setTimeout(function () 
            {
                document.getElementById("countdownTimer").innerHTML = "STOP " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}
function whileCats() 
{
    var currTime = 10;
    var i = 1;
    while (i < 12) 
    {
        if (i == 11) 
        {
            setTimeout(function () 
            {
                var dogImageLocation = "kitty.jpg";
                document.getElementById("happy").src = dogImageLocation;
                document.getElementById("countdownTimer").innerHTML = "Meow!"
            }, 1000 * i);
        } 
        else if (i > 6) 
        {
            setTimeout(function () 
            {
                document.getElementById("countdownTimer").innerHTML =
                    "Boots n Cats n Boots n Cats n " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } 
        else 
        {
            setTimeout(function () 
            {
                document.getElementById("countdownTimer").innerHTML = "Kitty incoming " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}