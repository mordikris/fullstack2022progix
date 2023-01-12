//let matrix = [[0,0,0],[0,0,0],[0,0,0]];


function matBuild(size = 3, val = 0) {
    let matrix = []
    for (let row = 0; row < size; row++) {// this for loop will run size item.
        let inner_arr = []
        for (let col = 0; col < size; col++) {
            inner_arr.push(val);
        }
        matrix.push(inner_arr)
    }
    return matrix
}

function setIndex(matrix, i, j, val) {
    matrix[i][j] = val;
}


function printMat(m) {
    for (let i = 0; i < m.length; i++) {
        console.log(...m[i])
    }
}



function diagonal(m, val = 1) {
    for (let i = 0; i < m.length; i++) {
        setIndex(m, i, i, 1);
    }
}

function diagonalT(m) {
    for (let i = 0; i < m.length; i++) {
        setIndex(m, i, m.length - 1 - i, "X")
    }
}

function box(m, val) {
    for (i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (i == 0 || j == 0 || i == m.length - 1 || j == m.length - 1) {
                setIndex(m, i, j, 1)
            }
        }
    }
}


function matrixToArray(m) {
    let arr = []
    for (let i = 0; i < m.length; i++) {
        arr.push(...m[i])
    }
    return arr

}
// option 2 //
// function matrixToArray(m){
//     let arr = []
//     for (let i = 0; i < m.length;i++){
//         for(let j = 0; j<m.length;j++){
//             arr.push(m[i][j])
//   }
//  }
//     return arr

// }

function ArraytoMatrix(arr, num) {
    let matrix = [], i, k;

    for (i = 0, k = -1; i < arr.length; i++) {
        if (i % num == 0) {
            k++;
            matrix[k] = []
        }
        matrix[k].push(arr[i]);
    }
    return matrix;
    /**
     * input: [1, 1, 1, 1, 0, 1, 1, 1, 1].lengh = size**2
     * 
     * output:
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     * 
     */
}

function discoverIndex(i, j, size) {
    // if (i > 3 || j > 3) return `index not exits`
    // return size * i + j;
}


function main() {
    let shuki = `----\n----`;
    let m = matBuild();
    printMat(m);
    console.log(shuki);
    diagonal(m)
    printMat(m)
    console.log(shuki);
    diagonalT(m)
    printMat(m)
    console.log(shuki);
    box(m);
    printMat(m)
    console.log(shuki);
    let q = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    let arr = matrixToArray(q)
    console.log(...arr);
    // discoverIndex(m);
    // printMat(m)

}
main();
















// function setIndex(i, j=1, val = 0) {
//     let matrix = []
//     for (let row = 0; row <= i; row++) {// this for loop will run size item.
//         let inner_arr = []
//         for (let col = 1; col <= i; col++) {
//             inner_arr.push(val);
//         }
//        //
//       matrix.push(inner_arr)
//     }
//     return matrix
// }
// //console.log(setIndex(2,1,0));


// ///


// let arr = [0,0,0]
// function p(i,j,val){
//     arr[i] = j;
//     return arr;
// }
// p(1,2,arr)
// //console.log(arr);


// function printMat(m) {
//     for (let i = 0; i <matBuild.length; i++){
//     }
// }
// console.log(printMat());


