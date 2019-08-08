export let Random = {};

Random.nextInt = function(min,max){
    return min + Math.floor(Math.random()*(max-min));
}

Random.nextDouble = function(min, max){
    return min+Math.random()*(max-min);
}

Random.nextStringArr = function(ars){
    return ars[Random.nextInt(0,ars.length)];
}

const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
Random.nextStringLen = function(len){
    let res = "";
    for (let i=0; i<len; i++)res = res+alp.charAt(Random.nextInt(0,Random.alp.length));
    return res;
}

Random.nextBoolean = function(probability){
    probability = probability || 0.5;
    return Math.random() < probability;
}
let figures = "0123456789abcdef";
Random.color = function(){
    let res = "#";
    for (let i=0; i<6; i++)
        res = res + figures.charAt(Math.floor(16*Math.random()));
    return res;
}

Random.shuffle = function(arr){
    for (let i=arr.length-1; i>0; i--){
        let j = Math.floor(Math.random()*(i+1));
        let pocket = arr[i];
        arr[i] = arr[j];
        arr[j] = pocket;
    }
}



