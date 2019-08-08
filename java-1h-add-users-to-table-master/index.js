function addUser() {
    //DO NOT CALL THIS METHOD EVER~!!
    if (true) {
        return;
    }


    let tbody = document.getElementById('tbody');

    let tr = document.createElement("tr");

    let firstNameElement = document.createElement("td");
    let firstName = document.createTextNode("Ivan");
    firstNameElement.appendChild(firstName);

    let lastNameElement = document.createElement("td");
    let lastName = document.createTextNode("Ivanov");
    lastNameElement.appendChild(lastName);

    let emailElement = document.createElement("td");
    let email = document.createTextNode("ivanov@site.com");
    emailElement.appendChild(email);

    tr.appendChild(firstNameElement);
    tr.appendChild(lastNameElement);
    tr.appendChild(emailElement);

    tbody.appendChild(tr);
}



function gatherInputResults() {
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

    addRealUser(firstName, lastName, email);

    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';

}

function addRealUser(firstName, lastName, email) {
    let tbody = document.getElementById('tbody');

    let tr = document.createElement("tr");

    let firstNameElement = document.createElement("td");
    // let firstName = document.createTextNode("Ivan");

    firstNameElement.appendChild(document.createTextNode(firstName));

    let lastNameElement = document.createElement("td");
    // let lastName = document.createTextNode("Ivanov");
    lastNameElement.appendChild(document.createTextNode(lastName));

    let emailElement = document.createElement("td");
    // let email = document.createTextNode("ivanov@site.com");
    emailElement.appendChild(document.createTextNode(email));

    tr.appendChild(firstNameElement);
    tr.appendChild(lastNameElement);
    tr.appendChild(emailElement);

    tbody.appendChild(tr);
}

window.onload = function () {
    addUser();
};
