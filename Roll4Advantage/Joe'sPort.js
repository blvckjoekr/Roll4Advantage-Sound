function checkCreds()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeID = document.getElementById("badgeID").value;
    var loginInfo = firstName + " " + lastName;
    //checks to make sure that the First and Last name has more that 3 characters and less than 20 characters
    if (firstName.lenght > 20 || firstName.length < 3 || lastName.lenght > 20 || lastName.length < 3)
    {
        var accessDeniedLocation = "accessDenied.jpg";
        document.getElementById("img").src = accessDeniedLocation;
        document.getElementById("loginStatus").innerHTML ="User not registered. Contact security manager to submit acces request.";
    } 
    //checks to make sure that the badge number has 3 digits
    else if (badgeID >= 1000 || badgeID <= 99 )
    {
        var accessDeniedLocation = "accessDenied.jpg";
        document.getElementById("img").src = accessDeniedLocation;
        document.getElementById("loginStatus").innerHTML ="Badge ID invalid!";
    }
    //upon meeting the criteria User wil be redirected to my youtube channel
    else
    {
        alert("Access Granted, Welcome " + loginInfo + "!");
        location.replace("https://mjdupreejd.wixsite.com/gamingjoekr")
    }
}