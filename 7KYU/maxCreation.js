/* Create an identity matrix of the specified size ( >= 0 ).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   */

        function createMatrix(size) {
            const newMatrix = [];
            for (i=0; i<size; i++) {
                const row = Array(size).fill(0);
                row[i]=1
                newMatrix.push(row);
            }
            return newMatrix
        }
        console.log(createMatrix(4));