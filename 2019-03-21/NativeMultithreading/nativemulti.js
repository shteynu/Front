//console.log(new Date());
//setTimeout(()=>console.log(new Date()),5000);
//setInterval(()=>console.log(new Date()),1000);
function displayTime(date) {
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}
sp.innerText = displayTime(new Date());
let si = setInterval(()=>
{sp.innerText = displayTime(new Date()),1000});
function stop() {
    clearInterval(si);
}