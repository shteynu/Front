function ok() {
    console.log(document.getElementById("author").value);
    console.log(document.getElementById("title").value);
    console.log(document.getElementById("year").value);
    console.log(document.getElementById("price").value);
}
author.focus();
document.addEventListener("keydown", function (e) {
    if(e.key === "Enter"){
        ok();
    }
});