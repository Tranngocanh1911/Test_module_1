let grades = [4, 7, 9, 2, 3, 5, 8];
let max = 0;
function findMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    document.write('Max number is: ' + max);
}
findMax(grades);