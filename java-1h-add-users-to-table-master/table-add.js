let globalId = 0;

let isPageLoaded = false;



window.onload = function () {
    isPageLoaded = true;
};



function gatherInputResults2() {
    //String firstName
    //String lastName
    //String email

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;

    if (firstName === '' || lastName === '' || email === '') {

        if (firstName === '') {
            alert("First name cannot be blank");
        }

        if (lastName === '') {
            alert("Last name cannot be blank");
        }

        if (email === '') {
            alert("Email cannot be blank");
        }
        return;
    }

    addUser(firstName, lastName, email);

    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';

}


function addUser(firstName, lastName, email) {
    if (!isPageLoaded) {
        return;
    }

    var table = document.getElementById("table");
    let size = table.rows.length; //3
                                     //elements 1, 2, 3 -> 4
    var row = table.insertRow(size); //indexes  0, 1, 2 -> 3

    var idCell = row.insertCell(0);
    var firstNameCell = row.insertCell(1);
    var lastNameCell = row.insertCell(2);
    var emailCell = row.insertCell(3);
    var actionCell = row.insertCell(4);

    idCell.innerHTML = ++globalId;
    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    emailCell.innerHTML = email;

    //By Pavel Moriakov
    // actionCell.innerHTML = `<button class="btn btn-danger" onclick="deleteUser(this)">Remove</button>`;


    actionCell.innerHTML = `<button class="btn btn-danger" onclick="deleteUser(${globalId})">Remove</button>`;


}

function deleteUser(tableRow) {
    var table = document.getElementById("table");
    // table.deleteRow(tableRow.parentElement.parentElement.rowIndex);


    for (let i = 0; i < table.rows.length; i++) {
        var currentCell = table.rows[i].cells[0]; //0 -> id
        if (currentCell.innerText === tableRow.toString()) {
            table.deleteRow(i);
            return;
        }
    }
}

function navigateToFacebook() {
    window.location.href = "https://facebook.com"
}