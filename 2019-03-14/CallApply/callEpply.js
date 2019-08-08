function getRes(){
    let res = [];
    let opt = sel.options;
    [].forEach.call(opt,(a)=>{
        if (a.selected)res.push(a.value);
    });
    sp.innerText = res.toString();
}