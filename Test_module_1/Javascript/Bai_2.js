let arr1 = [4,6,7,7,2,9,1];
let x = 2;
function tryRemoveFromArray(arr, b) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === b) {
            arr.splice(arr.indexOf(arr[i]),1)
            flag = true;
        }
        else flag = false;
    }
    if (flag) {
        console.log(arr);
    }
    else console.log(arr);
}
tryRemoveFromArray(arr1, x)