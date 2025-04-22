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

async function addVak() {
    try{
        let input = document.querySelector("#vakkenInput");
        let nieuwVakken = input.value.trim();

        if (nieuwVakken === "") {
            alert("Geef een vak in.");
        //     return hier volgens oplossing?
        }

        let response = await fetch("http://localhost:5688/vakken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({naam: nieuwVakken})
        });
        if (response.ok) {
            input.value = "";
            fetchVakken();
        }
    } catch(error){
        console.error("Error addVakken: ", error);
    }
}

async function deleteVak(id) {
    try {
        let response = await fetch(`http://localhost:5688/vakken/${id}`, {
            method: "DELETE"
        })
        if (response.ok) {
            fetchVakken();
        }
    } catch(error){
        console.error("Error deleteVak: ", error);
    }
}


}