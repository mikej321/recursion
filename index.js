// function fibs(n) {

//     let result = [];

//     if (n === 0) {
//         return result;
//     } else if (n === 1) {
//         result = [0];
//         return result;
//     }

//     result = [0, 1];

//     for (let i = 0; i < n - 2; i++) {
//       let nextNum = result[i] + result[i + 1];
//       result.push(nextNum);  
//     }
//     return result;
// }

// fibs(8)

function fibsRec(n, leftNum = 0, rightNum = 1, result = [0, 1]) {

    if (n === 0) {
        result = [];
        return result;
    } else if (n === 1) {
        result = [0];
        return result;
    }

    if (n - 2 === 0) return result;

    let nextNum = leftNum + rightNum;
    result.push(nextNum);

    return fibsRec(n - 1, leftNum = rightNum, rightNum = nextNum, result);
         
}

fibsRec(6)

function mergeSort(arr) {
    if (arr.length === 0 || arr.length === 1) return arr;

    let iMiddle = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, iMiddle));
    let right = mergeSort(arr.slice(iMiddle));

    let resultArr = [];
    let iLeft = 0;
    let iRight = 0;

    while (resultArr.length < arr.length) {
        if (left[iLeft] < right[iRight]) {
            resultArr.push(left[iLeft]);
            iLeft++;
        } else {
            resultArr.push(right[iRight]);
            iRight++;
        }

        if (iLeft === left.length) {
            let slicedRight = right.slice(iRight);
            resultArr.push(...slicedRight);
            break;
        } else if (iRight === right.length) {
            let slicedLeft = left.slice(iLeft);
            resultArr.push(...slicedLeft);
            break;
        }
    }

    return resultArr;
}

mergeSort([3, 2, 1, 13, 8, 5, 0, 1])
mergeSort([105, 79, 100, 110])
