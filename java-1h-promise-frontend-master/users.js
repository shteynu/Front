/**
 * XMLHttpRequest vs Fetch API
 * low level         high level
 *
 *
 * readyState = Israel Post tracking number
 */




function getAllUsers() {
    //creating a variable
    let xhttp = new XMLHttpRequest();

    //waiting for response
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            let table = document.getElementById("person");
            let response = xhttp.responseText; //string

            let persons = JSON.parse(response); //{ 'id' : 1, 'name' : 'john' }

            for (let i = 0; i < persons.length; i++) {
                addPersonToTable(persons[i], table);
            }
        }

        // if (this.status !== 200) {
        //     alert(xhttp.responseText);
        // }
    };
    xhttp.open("GET", "http://localhost:8080/persons", true);
    xhttp.send();
}

function addNewPerson() {
    let input = document.getElementById('user-input').value;
    if (!input) {
        alert('No person added!');
        return;
    }

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            let table = document.getElementById("person");
            let response = xhttp.responseText; //string

            let persons = JSON.parse(response); //{ 'id' : 1, 'name' : 'john' }

            table.innerHTML = '';

            for (let i = 0; i < persons.length; i++) {
                addPersonToTable(persons[i], table);
            }
        }
    };

    xhttp.open("POST", "http://localhost:8080/persons", true); //initialize
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({name: input}));
}

function addPersonToTable(person, table) {
    let row = table.insertRow(table.rows.length);
    let id = row.insertCell(0).innerText = person.id;
    let name = row.insertCell(1).innerText = person.name;
}


window.onload = function () {
    getAllUsers();
};
