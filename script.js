//esercizio 21
let x = "John";
let y = "Doe";
if (x !== y) {
    console.log(x + " <> " + y);
}

//esercizio 22
let object = {
    name: 'Andrea',
    surname: 'Campetella',
    email: 'andrea.campetella@libero.it'
};

//esercizio 23
delete object.email;

//esercizio 24
let arr = ["Andrea", "Gianluca", "Arcangelo", "Guido", "Luca", "Adriana", "Veronica", "Ilde", 
"Riccardo", "Samuele"];

//esercizio 25
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//esercizio 26
let randomArr = [];
for(let i = 1; i <= 100; i++) {
    let num = Math.ceil(Math.random() * 100);
    randomArr.push(num);
}

console.log(randomArr);

//esercizio 27
let maxMin = function() {
    let max = randomArr[0];
    for(let i = 1; i < randomArr.length; i++) {
        if (randomArr[i] > max) {
            max = randomArr[i];
        }
    }
    let min = randomArr[0];
    for(let i = 1; i < randomArr.length; i++) {
        if (randomArr[i] < min) {
            min = randomArr[i];
        }
    }
    console.log("Valore massimo presente nell'array: " + max);
    console.log("Valore minimo presente nell'array: " + min);
}

maxMin(); //invocazione della funzione

//esercizio 28
let generaArrayDiArray = function(numeroElementi) {
    let multArr = [];
    for(let i = 1; i <= numeroElementi; i++) {
        let child = [];
        for(let y = 1; y <= 10; y++) {
            let num = Math.ceil(Math.random() * 100);
            child.push(num);
        }
        multArr.push(child);
    }
    return multArr;
}

//crea un array padre di 8 elementi, ognuno dei quali è un array contenente 10 numeri random
console.log(generaArrayDiArray(8));

//esercizio 29
function maxArr(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    } else if (arr1.length < arr2.length) {
        return arr2;
    } else {
        return "I due array hanno la stessa lunghezza";
    }
}

console.log(maxArr([10, 23, 45], [1, 5, 2, 8, 10, 12]));

//esercizio 30
function maxSumArr(arr1, arr2) {
    let sum1 = 0;
    for(let i = 1; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    let sum2 = 0;
    for(let i = 1; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    let diff = sum1 - sum2;
    if (diff > 0) {
        return arr1;
    } else if (diff < 0) {
        return arr2;
    } else {
        return "La somma degli elementi dei due array è uguale";
    }
}

console.log(maxSumArr([10, 23, 45], [1, 5, 2, 8, 10, 12]));

//esercizio 31
let elemento = document.getElementById("container");
console.log(elemento);

//esercizio 32
let colonne = document.getElementsByTagName("td");
console.log(colonne);

//esercizio 33
for(let colonna of colonne) {
    console.log(colonna.innerText);
}

//esercizio 34
function changeTitle(title) {
    let titleContainers = document.getElementsByTagName("title");
    titleContainers[0].innerText = title;
}

//esercizio 35
function addTableRow() {
    let tables = document.getElementsByTagName("table");
    rowNumber = tables[0].getElementsByTagName("tr").length + 1;
    let newRow = document.createElement("tr");
    for(let i = 1; i <= 5; i++) {
        let newCol = document.createElement("td");
        newCol.innerText = rowNumber + "" + i;
        newRow.appendChild(newCol);
    }
    tables[0].appendChild(newRow);

}

//esercizio 36 - il testo diceva di scrivere una funzione per aggiungere la classe "test" alle righe della tabella
//ho creato una funzione più generica per aggiungere una qualsiasi classe alle righe
function addClassToTableRows(className) {
    let tables = document.getElementsByTagName("table");
    let rows = tables[0].getElementsByTagName("tr");
    for(let row of rows) {
        row.classList.add(className);
    }
}

addClassToTableRows("test"); //questa istruzione aggiunge la classe test alle righe della tabella

//esercizio 37 - il testo diceva di scrivere una funzione per aggiungere un sfondo rosso a tutti i link della pagina
//ho creato una funzione più generica per aggiungere uno sfondo con il colore specificato in input
function addBackgroundToLinks(color) {
    let links = document.getElementsByTagName("a");
    for(let link of links) {
        link.style.backgroundColor = color;
    }
}

addBackgroundToLinks("red"); //questa istruzione aggiunge uno sfondo rosso a tutti i link

//esercizio 38
window.onload = onLoadFunction;

function onLoadFunction() {
    console.log("Page loaded");
}

//esercizio 39
//il parametro di input elements è pensato come un array di stringhe contenenti le voci da inserire nella lista non ordinata
function addElementsToUL(elements) {
    let lists = document.getElementsByTagName("ul");
    for(let element of elements) {
        let li = document.createElement("li");
        li.innerText = element;
        lists[0].appendChild(li);
    }
}

addElementsToUL(["pippo", "pluto", "paperino"]);

//esercizio 40
//il parametro di input list è l'oggetto lista da svuotare
function clearList(list) {
    while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }
}

//esercizio 41
let links = document.getElementsByTagName("a");
for(let link of links) {
    link.addEventListener("mouseover", showHref);
}

function showHref(event) {
    alert(event.target.getAttribute("href"));
}

//esercizio 42
//creo ul pulsante
let hideImgsButton = document.createElement("button");
hideImgsButton.innerText = "Hide Images";
//recupero il body della pagina
let body = document.getElementsByTagName("body")[0];
//inserisco il pulante nel body
body.appendChild(hideImgsButton);
//registro il listener per l'evento click del pulsante
hideImgsButton.addEventListener("click", hideImages);

function hideImages() {
    let images = document.getElementsByTagName("img");
    for(let img of images) {
        img.style.display = "none"; //nascondo l'immagine corrente
    }
}

//esercizio 43
let showHideTableButton = document.createElement("button");
showHideTableButton.innerText = "Hide Table";
showHideTableButton.style.marginTop = "10px";
let br = document.createElement("br");
body.appendChild(br);
body.appendChild(showHideTableButton);
showHideTableButton.addEventListener("click", showHideTable);
let hideTable = true;

function showHideTable(event) {
    let table = document.getElementsByTagName("table")[0];
    if (hideTable) {
        table.style.display = "none";
        hideTable = false;
        event.target.innerText = "Show Table";
    } else {
        table.style.display = "table";
        hideTable = true;
        event.target.innerText = "Hide Table"
    }

}

//esercizio 44
function tdSum() {
    let cells = document.getElementsByTagName("td");
    let sum = 0;
    for(let cell of cells) {
        let cellContent = cell.innerText;
        if (parseFloat(cellContent) || parseInt(cellContent)) {
            sum += Number(cellContent);
        }
    }
    return sum;
}

console.log("Somma dei numeri della tabella: " + tdSum());

//esercizio 45
let pageTitle = document.getElementsByTagName("h1")[0];
pageTitle.addEventListener("click", hideLastLetter);

function hideLastLetter(event) {
    let title = event.target.innerText;
    let newTitle = title.substring(0, title.length - 1);
    event.target.innerText = newTitle;
}

//esercizio 46
let columns = document.getElementsByTagName("td");
for(let col of columns) {
    col.addEventListener("click", changeBackground);
}

function changeBackground(event) {
    event.target.style.backgroundColor = "green";
}

//esercizio 47
let deleteTDButton = document.createElement("button");
deleteTDButton.innerText = "Delete td";
deleteTDButton.style.marginTop = "10px";
let brk = document.createElement("br");
body.appendChild(brk);
body.appendChild(deleteTDButton);
deleteTDButton.addEventListener("click", deleteTD);

function deleteTD() {
    let table = document.getElementsByTagName("table")[0];
    let tbody = table.getElementsByTagName("tbody")[0];
    let rows = tbody.getElementsByTagName("tr");
    let randomRow = Math.ceil(Math.random() * rows.length) - 1;
    let cols = rows[randomRow].getElementsByTagName("td");
    let randomCol = Math.ceil(Math.random() * cols.length) - 1;
    rows[randomRow].removeChild(cols[randomCol]);
    if (rows[randomRow].getElementsByTagName("td").length === 0) {
        tbody.removeChild(rows[randomRow]);
    }
}

//esercizio 48
let cols = document.getElementsByTagName("td");
for(let col of cols) {
    col.addEventListener("mouseover", addPinkBorderToTD);
}

function addPinkBorderToTD(event) {
    event.target.style.borderWidth = "1px";
    event.target.style.borderStyle = "solid";
    event.target.style.borderColor = "pink";
}

//esercizio 49
function createTable(rows, cols) {
    let table = document.createElement("table");
    table.style.marginTop = "10px";
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for(let i = 1; i <= rows; i++) {
        let row = document.createElement("tr");
        for(let j = 1; j <= cols; j++) {
            let col = document.createElement("td");
            col.innerText = i + "" + j;
            row.appendChild(col);
        }
        tbody.appendChild(row);
    }
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(table);
}

createTable(4,3);

//esercizio 50
function removeLastTable() {
    let body = document.getElementsByTagName("body")[0];
    tables = body.getElementsByTagName("table");
    body.removeChild(tables[tables.length - 1]);
}


