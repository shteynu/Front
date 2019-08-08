function Book(author, title, year, price){
    this.author = author;
    this.title = title;
    this.year = year;
    this.price = price;
}

function ok(){
    if (!stringValidator(author.value)) {wrongData("author",author.value); return;}
    if (!stringValidator(title.value)) {wrongData("title",title.value); return;}
    if (!integerValidator(year.value)) {wrongData("year",year.value); return;}
    if (!floatValidator(price.value)) {wrongData("price",price.value); return;}

    goodData();
}

function wrongData(arg, value){
    result.classList.remove("success");
    result.classList.add("fail");
    result.innerText = "Wrong data ("+arg+"="+value+")";
}

function goodData(){
    const book = new Book(author.value, title.value,
                          parseInt(year.value),
                          parseFloat(price.value));
    console.log(book);

    result.classList.remove("fail");
    result.classList.add("success");
    result.innerText = "Data at console";
}