"use strict";

var facebook = true;

function myFunction() {
    facebook = !facebook;
    if (facebook) {
        document.getElementById("logo").innerHTML = "facebook";
    } else {
        document.getElementById("logo").innerHTML = "osvaldo";
    }
}

