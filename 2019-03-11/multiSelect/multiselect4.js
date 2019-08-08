function show() {
    let res= [];
   /* for (let i=0; i<sel.options.length;i++){
        let opt = sel.options[i];
        if(opt.selected)res.push(opt.value);
    };*/

    [].forEach.call(sel.options,(opt =>{
        if(opt.selected)res.push(opt.value);
    }));
    sp.innerText = res.toString();
}