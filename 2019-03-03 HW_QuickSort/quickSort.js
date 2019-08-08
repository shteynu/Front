let x = [8, 0, 4, 7, 3, 7, 10, 12, -3];
console.log("Before sort");
console.log(x);
let low = 0;
let High = x.length - 1;
quickSort(x,low,High);
console.log("After sort");
console.log(x);

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}