inp.addEventListener("keypress",(e)=>{
    if (e.key=="Enter")sp.innerText = inp.value;
});

inp.addEventListener("change", ()=>{
    sp.innerText = inp.value;
});

inp.addEventListener("input",()=>{
    sp.innerText = inp.value;
});

