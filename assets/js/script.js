"use strict";

document.addEventListener("DOMContentLoaded", init)


function init() {
    document.querySelector("#vakkenButton").addEventListener("click", addVak);
    fetchVakken()
    console.log("Website is ingeladen")
}

async function fetchVakken() {
    try{
        const response = await fetch("http://localhost:5688/vakken");
        const vakken = await response.json();

        displayVakken(vakken);
    }
    catch(error){
        console.error("Error fetchVakken: ", error);
    }
}
