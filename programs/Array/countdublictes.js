let arr = [1, 2, 2, 2, 3, 4, 4, 5, 1, 6];

arr.sort();

let left = 0;

while (left < arr.length) {

    let count = 1;
    let right = left + 1;

    while (right < arr.length && arr[left] == arr[right]) {
        count++;
        right++;
    }

    if (count > 1) {
        console.log(arr[left] + " freq : " + count);
    }

    left = right;
}