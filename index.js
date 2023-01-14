let nbrcours = 0;
let container = null;
let button = null;
let tag = null;
let input = null;
let goToLine = document.createElement("br");
let data = [];

function displayTags() {

    nbrcours = parseInt(document.getElementById("nbr").value);

    if (!isNaN(nbrcours)) {
        container = document.getElementById("container");
        container.innerHTML = "";
        for (let i = 0; i < nbrcours; i++) {
            tag = document.createElement("div");
            tag.classList.add("course-container");
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

        //desactivation du choix du nombre de cours 
        button = document.createElement("button");
        button.innerHTML = "Valider";
        button.classList.add("validate-button");
        button.addEventListener("click", UserInputTab);
        container.appendChild(button);
    }

}


function modifier() {
    const userInputs = document.querySelectorAll("input[type = texte]");
    data = [];
    for (let i = 0; i < userInputs.length; i++) {
        userInputs[i].value = "";
        userInputs[i].readOnly = false;
    }
    document.getElementById("nbr").disabled = false;
    document.getElementById("validate-button").disabled = false;
}


function saveChanges() {
    const userInputs = document.querySelectorAll("input[type = texte]");
    for (let i = 0; i < userInputs.length; i++) {
        data[i] = userInputs[i].value;
        userInputs[i].readOnly = true;
    }
    modif.innerHTML = "MODIFIER";
    modif.removeEventListener("click", saveChanges);
    modif.addEventListener("click", modifier);
    printUserInputs();
}






function UserInputTab() {
    // récupérez les données des champs de saisie
    document.getElementById("nbr").disabled = true;
    document.getElementById("validate-button").disabled = true;
    const userInputs = document.querySelectorAll("input[type = texte]");
    const modif = document.createElement("button");
    for (let i = 0; i < userInputs.length; i++) {
        data[i] = userInputs[i].value;
        userInputs[i].readOnly = true;
    }
    printUserInputs();
    modif.innerHTML = "Modifier";
    modif.style.fontSize = "16px";
    modif.addEventListener("click", modifier);
    document.querySelector("table").appendChild(goToLine);
    document.querySelector("table").appendChild(modif);
}



function printUserInputs() {
    //vide le tableau avant chaque nouvel affichage
    document.querySelector("table").innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        row.classList.add("course-row");
        const cell = document.createElement("td");
        cell.classList.add("course-cell");
        cell.textContent = data[i].toUpperCase();
        row.appendChild(cell);
        document.querySelector("table").appendChild(row);
    }
}
