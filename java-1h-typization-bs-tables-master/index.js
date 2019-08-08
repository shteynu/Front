// let _i = 10;
//
// let a = 1;

//here I born (let)
// {
//     let a = 10;
// }
//here I die

// alert("a =" + a);

// function loop() {
//
//     for (let i = 0; i < _i; i++) {
//         console.log("this.i: " + _i);
//         console.log("i: " + i);
//     }
// }


function myFunction() {
    if (1 === 1) {
        //~200 lines of code
        return true;
    }
    //UNDEFINED!!!!!!!!!!!!!!!
}

function function2() {
    var i = myFunction();

    if (myFunction()) { //void
        alert("hi alert");
    }
}

/*
function addNewUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    document.getElementById("name").innerHTML = userToString(firstName);



}

function userToString(user) {
    return user.firstName + " " + user.lastName + " " + user.email;
}
*/

