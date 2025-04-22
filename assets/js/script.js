"use strict";

document.addEventListener("DOMContentLoaded", init)


function init() {
    document.querySelector("#vakkenButton").addEventListener("click", addVak);
    fetchVakken()
    console.log("Website is ingeladen")
}

