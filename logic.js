
let currentPlayer = 'X';

        function makeMove(button) {
            if (button.textContent === '') {
                button.textContent = currentPlayer;
                if (checkWinner()) {
                    alert(currentPlayer + " wins!");
                    resetBoard();
                } else if (isBoardFull()) {
                    alert("It's a tie!");
                    resetBoard();
                } else {
                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                }
            }
        }

        function checkWinner() {
            // Check rows
            if (one.textContent === currentPlayer && two.textContent === currentPlayer && three.textContent === currentPlayer) return true;
            if (four.textContent === currentPlayer && five.textContent === currentPlayer && six.textContent === currentPlayer) return true;
            if (seven.textContent === currentPlayer && eight.textContent === currentPlayer && nine.textContent === currentPlayer) return true;
            
            // Check columns
            if (one.textContent === currentPlayer && four.textContent === currentPlayer && seven.textContent === currentPlayer) return true;
            if (two.textContent === currentPlayer && five.textContent === currentPlayer && eight.textContent === currentPlayer) return true;
            if (three.textContent === currentPlayer && six.textContent === currentPlayer && nine.textContent === currentPlayer) return true;
            
            // Check diagonals
            if (one.textContent === currentPlayer && five.textContent === currentPlayer && nine.textContent === currentPlayer) return true;
            if (three.textContent === currentPlayer && five.textContent === currentPlayer && seven.textContent === currentPlayer) return true;

            return false;
        }

        function isBoardFull() {
            return one.textContent !== '' && two.textContent !== '' && three.textContent !== '' &&
                   four.textContent !== '' && five.textContent !== '' && six.textContent !== '' &&
                   seven.textContent !== '' && eight.textContent !== '' && nine.textContent !== '';
        }

        function resetBoard() {
            one.textContent = '';
            two.textContent = '';
            three.textContent = '';
            four.textContent = '';
            five.textContent = '';
            six.textContent = '';
            seven.textContent = '';
            eight.textContent = '';
            nine.textContent = '';
            currentPlayer = 'X';
        }