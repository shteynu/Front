let x = [];
for(let i=0;i<50;i++){
    x.push(Math.floor(Math.random()*50));

}
console.log("-----------------Before sort------------------");
console.log(x.toString());
quickSort(x,0,x.length-1);
console.log("-----------------After sort------------------");
console.log(x.toString());


/*function quickSort(array,left,right){
    let index;
    if(array.length>1){
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? array.length - 1 : right;
    }
    index = partition(array, left, right);
    if (left < index - 1) {
        quickSort(array, left, index - 1);
    }
    if (index < right) {
        quickSort(array, index, right);
    }

return array;
}*/

function quickSort(array,low,high){
    let middle = array[Math.floor((high + low) / 2)];
    let first = low;
    let last = high;
    while(first<last) {
        while (array[first] < middle) {
            first++;
        }
        while (array[last] > middle) {
            last--;
        }
        if (first <= last) {
            swap(array, first, last);
            first++;
            last--;
        }
    }
    if (low < last)
        quickSort(array, low, last);

    if (high > first)
        quickSort(array, first, high);
}
function swap(array, firstIndex, secondIndex){
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}