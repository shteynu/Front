//call(foThis,arg1,arg2...)
//apply(forThis, [arg1,arg2,...])
// Про bind почитать самим;
function getResult(){
    [].forEach.call(document.getElementsByName("cars"),(a)=>{
        if (a.checked)sp.innerText = a.value;
    });
}