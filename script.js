const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turn0 = true;
let cells = document.querySelectorAll('.cell');
let msg = document.getElementById('msg');

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (turn0) {
            cell.textContent = '0';
            cell.disabled = true;
            turn0 = false;
            msg.textContent = "Player X's turn";
        }
        else {
            cell.textContent = 'X';
            cell.disabled = true;
            turn0 = true;
            msg.textContent = "Player O's turn";
        }

        checkWinner();
    });
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = cells[pattern[0]].textContent;
        let val2 = cells[pattern[1]].textContent;
        let val3 = cells[pattern[2]].textContent;
        
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log(`${val1} wins!`);
            }
        }
    }        

}