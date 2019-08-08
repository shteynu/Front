function getIJ(i,j) {
    let rows = document.querySelectorAll("table tr")[i-1]
        .children[j-1]
        .innerText;
    console.log(rows);
}