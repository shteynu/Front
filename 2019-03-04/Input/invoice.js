function totalValue() {
   /* total.innerText = qty.value*prc.value;*/
    total.innerText = (+qty.value)+(+prc.value);
    /*total.innerText = Number.parseInt(qty.value)+Number.parseInt(prc.value);*/
}

qty.addEventListener("input", totalValue);
prc.addEventListener("input",totalValue);

qty.placeholder="quantity";
prc.placeholder="price";
/*qty.value = 0;
prc.value = 0;*/
totalValue();