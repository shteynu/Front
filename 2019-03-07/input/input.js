inp.disabled = false;
let toggleDisabled=function () {
    inp.disabled = !inp.disabled;
};
let getRangeValue = function () {
    sp.innerText = range.value;
};
range.addEventListener("input", ()=> {
    sp.innerText = range.value;
});
