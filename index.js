"use strict";

var facebook = true;

function changeLogo() {
    facebook = !facebook;
    if (facebook) {
        document.getElementById("logo").innerHTML = "facebook";
    } else {
        document.getElementById("logo").innerHTML = "osvaldo";
    }
}

