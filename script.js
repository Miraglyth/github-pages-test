document.addEventListener("DOMContentLoaded", function() {
    Init();
});

function Init()
{
    document.getElementById("timeDisplay").innerHTML = "The time in UTC is: " + new Date(Date.now()).toUTCString();
};

document.getElementById("refreshbutton").addEventListener("click", function() {
    Init();
});
