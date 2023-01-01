let nbrcours = 0;
let container = null;
let button = null;
let tag = null;
let input = null;
let goToLine = document.createElement("br");
let data = [];

function displayTags() {
    nbrcours = parseInt(document.getElementById("nbr").value);
    container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < nbrcours; i++) {
        tag = document.createElement("div");
        tag.style.margin = "20px";
        tag.innerHTML = "Matière " + (i + 1);
        input = document.createElement("input");
        input.type = "texte";
        input.name = "matière" + (i + 1);
        input.value = "";
        goToLine.innerHTML = "<br><br><br>";

        tag.appendChild(input);
        tag.appendChild(goToLine);
        container.appendChild(tag);
    }
    button = document.createElement("button");
    button.innerHTML = "Valider";
    button.style.fontSize = "16px";
    button.addEventListener("click", UserInputTab);
    container.appendChild(button);

    //desactivation du choix du nombre de cours 

}


function UserInputTab() {
    // récupérez les données des champs de saisie
    document.getElementById("nbr").disabled = true;
    const userInputs = document.querySelectorAll("input[type = texte]");
    const modif = document.createElement("button");
    for (let i = 0; i < userInputs.length; i++) {
        data.push(userInputs[i].value);
        userInputs[i].readOnly = true;
    }
    //vide le tableau avant chaque nouvel affichage
    document.querySelector("table").innerHTML = "";

    document.querySelector("table").insertAdjacentHTML("beforebegin", "<p><strong>Voici les cours saisis : </strong></p>");
    printUserInputs();
    modif.innerHTML = "MODIFIER";
    modif.style.fontSize = "16px";
    modif.addEventListener("click", modifier);
    document.querySelector("table").appendChild(goToLine);
    document.querySelector("table").appendChild(modif);

}

function printUserInputs() {
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        row.style.border = "2px solid black";
        const cell = document.createElement("td");
        cell.style.padding = "20px";
        cell.style.margin = "50px";
        cell.textContent = data[i].toUpperCase();
        row.appendChild(cell);
        document.querySelector("table").appendChild(row);
    }
}


function modifier() {
    /* document.querySelector("table").innerHTML = "";
     const userInputs = document.querySelector("input[type = texte ]");
     for (let i = 0; i < userInputs.length; i++) {
         userInputs[i].readOnly = false;
     }
     data = [];*/
    window.location.reload();
}