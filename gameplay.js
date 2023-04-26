function gamePlay(i) {

    state = update_state(i, state);
    console.log("state");
    console.log(game_tree.children.length);



    for (let i = 0; i < game_tree.children.length; i++) {
        if (compareMatrices(game_tree.children[i].state, state)) {

            game_tree = game_tree.children[i];
            moves += 1;

            if (moves == 9) {
                console.log("Draw");
            }

        }
    }

    if (game_tree.children.length == 0) {
        console.log("player wins");
        mark_result(state);
        grid[0].removeEventListener('click', clicked0);
        grid[0].removeEventListener('mouseout', mout0);
        grid[0].removeEventListener('mouseover', mover0);

        grid[1].removeEventListener('click', clicked1);
        grid[1].removeEventListener('mouseout', mout1);
        grid[1].removeEventListener('mouseover', mover1);

        grid[2].removeEventListener('click', clicked2);
        grid[2].removeEventListener('mouseout', mout2);
        grid[2].removeEventListener('mouseover', mover2);

        grid[3].removeEventListener('click', clicked3);
        grid[3].removeEventListener('mouseout', mout3);
        grid[3].removeEventListener('mouseover', mover3);

        grid[4].removeEventListener('click', clicked4);
        grid[4].removeEventListener('mouseout', mout4);
        grid[4].removeEventListener('mouseover', mover4);

        grid[5].removeEventListener('click', clicked5);
        grid[5].removeEventListener('mouseout', mout5);
        grid[5].removeEventListener('mouseover', mover5);

        grid[6].removeEventListener('click', clicked6);
        grid[6].removeEventListener('mouseout', mout6);
        grid[6].removeEventListener('mouseover', mover6);

        grid[7].removeEventListener('click', clicked7);
        grid[7].removeEventListener('mouseout', mout7);
        grid[7].removeEventListener('mouseover', mover7);

        grid[8].removeEventListener('click', clicked8);
        grid[8].removeEventListener('mouseout', mout8);
        grid[8].removeEventListener('mouseover', mover8);

    }


    console.log("next");
    let randomIndex = Math.floor(Math.random() * game_tree.children.length);
    if (difficulty == 3) {
        game_tree = game_tree.children[game_tree.best_child_index];
    } else if (difficulty == 2) {
        let choice = Math.round(Math.random()); // 0 or 1
        let chosenIndex = choice === 0 ? game_tree.best_child_index : randomIndex;
        game_tree = game_tree.children[chosenIndex];
    } else {
        game_tree = game_tree.children[randomIndex];
    }
    let new_index = 0;
    for (let i = 0; i < 9; i++) {
        let x = Math.floor(i / 3);
        let y = i % 3;
        console.log(game_tree.state, state, x, y);
        if (game_tree.state[x][y] !== state[x][y]) {
            new_index = i;
            moves += 1;
            console.log("moves");
            // drawO(new_index, true);
            state = game_tree.state;

            if (playerStarts) {
                drawO(new_index, true);
            } else {
                drawX(new_index, true);
            }

            if (game_tree.children.length == 0) {
                console.log("PC wins");
                mark_result(state);
                grid[0].removeEventListener('click', clicked0);
                grid[0].removeEventListener('mouseout', mout0);
                grid[0].removeEventListener('mouseover', mover0);

                grid[1].removeEventListener('click', clicked1);
                grid[1].removeEventListener('mouseout', mout1);
                grid[1].removeEventListener('mouseover', mover1);

                grid[2].removeEventListener('click', clicked2);
                grid[2].removeEventListener('mouseout', mout2);
                grid[2].removeEventListener('mouseover', mover2);

                grid[3].removeEventListener('click', clicked3);
                grid[3].removeEventListener('mouseout', mout3);
                grid[3].removeEventListener('mouseover', mover3);

                grid[4].removeEventListener('click', clicked4);
                grid[4].removeEventListener('mouseout', mout4);
                grid[4].removeEventListener('mouseover', mover4);

                grid[5].removeEventListener('click', clicked5);
                grid[5].removeEventListener('mouseout', mout5);
                grid[5].removeEventListener('mouseover', mover5);

                grid[6].removeEventListener('click', clicked6);
                grid[6].removeEventListener('mouseout', mout6);
                grid[6].removeEventListener('mouseover', mover6);

                grid[7].removeEventListener('click', clicked7);
                grid[7].removeEventListener('mouseout', mout7);
                grid[7].removeEventListener('mouseover', mover7);

                grid[8].removeEventListener('click', clicked8);
                grid[8].removeEventListener('mouseout', mout8);
                grid[8].removeEventListener('mouseover', mover8);

                break;

            }

            if (new_index === 0) {
                // Code for new_index = 0
                grid[0].removeEventListener('click', clicked0);
                grid[0].removeEventListener('mouseout', mout0);
                grid[0].removeEventListener('mouseover', mover0);
            } else if (new_index === 1) {
                // Code for new_index = 1
                grid[1].removeEventListener('click', clicked1);
                grid[1].removeEventListener('mouseout', mout1);
                grid[1].removeEventListener('mouseover', mover1);
            } else if (new_index === 2) {
                // Code for new_index = 2
                grid[2].removeEventListener('click', clicked2);
                grid[2].removeEventListener('mouseout', mout2);
                grid[2].removeEventListener('mouseover', mover2);
            } else if (new_index === 3) {
                // Code for new_index = 3
                grid[3].removeEventListener('click', clicked3);
                grid[3].removeEventListener('mouseout', mout3);
                grid[3].removeEventListener('mouseover', mover3);
            } else if (new_index === 4) {
                // Code for new_index = 4
                grid[4].removeEventListener('click', clicked4);
                grid[4].removeEventListener('mouseout', mout4);
                grid[4].removeEventListener('mouseover', mover4);
            } else if (new_index === 5) {
                // Code for new_index = 5
                grid[5].removeEventListener('click', clicked5);
                grid[5].removeEventListener('mouseout', mout5);
                grid[5].removeEventListener('mouseover', mover5);
            } else if (new_index === 6) {
                // Code for new_index = 6
                grid[6].removeEventListener('click', clicked6);
                grid[6].removeEventListener('mouseout', mout6);
                grid[6].removeEventListener('mouseover', mover6);
            } else if (new_index === 7) {
                // Code for new_index = 7
                grid[7].removeEventListener('click', clicked7);
                grid[7].removeEventListener('mouseout', mout7);
                grid[7].removeEventListener('mouseover', mover7);
            } else if (new_index === 8) {
                // Code for new_index = 8
                grid[8].removeEventListener('click', clicked8);
                grid[8].removeEventListener('mouseout', mout8);
                grid[8].removeEventListener('mouseover', mover8);
            }

        }

    }



}

function update_state(i, state) {
    let x = Math.floor(i / 3);
    let y = i % 3;
    if (playerStarts) {
        state[x][y] = 'X';
    } else {
        state[x][y] = 'O';
    }
    return state;
}

function compareMatrices(matrix1, matrix2) {
    // Check if matrices have the same number of rows and columns
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        return false;
    }

    // Iterate through each element in the matrices
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[0].length; j++) {
            // Check if corresponding elements are not equal
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
            }
        }
    }

    // If all elements are equal, return true
    return true;
}

state = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
game_tree_copy = generate_game_tree(state, 'X');
game_tree = game_tree_copy;

function mark_result(state) {
    // Check for row wins
    for (let i = 0; i < 3; i++) {
        row = state[i];
        if (row[0] === row[1] && row[0] === row[2]) {
            if (row[0] != ' ') {
                c[3 * i].lineWidth = 0.15 * 0.08 * window.innerWidth;
                c[3 * i].strokeStyle = "red";
                c[3 * i + 1].strokeStyle = "red";
                c[3 * i + 2].strokeStyle = "red";

                c[3 * i].beginPath();
                c[3 * i].moveTo(0, window.innerWidth * 0.04);
                c[3 * i].lineTo(window.innerWidth * 0.08, window.innerWidth * 0.04);
                c[3 * i].stroke();

                c[3 * i + 1].beginPath();
                c[3 * i + 1].moveTo(0, window.innerWidth * 0.04);
                c[3 * i + 1].lineTo(window.innerWidth * 0.08, window.innerWidth * 0.04);
                c[3 * i + 1].stroke();

                c[3 * i + 2].beginPath();
                c[3 * i + 2].moveTo(0, window.innerWidth * 0.04);
                c[3 * i + 2].lineTo(window.innerWidth * 0.08, window.innerWidth * 0.04);
                c[3 * i + 2].stroke();
            }
        }
    }

    // Check for column wins
    for (let i = 0; i < 3; i++) {
        if (state[0][i] === state[1][i] && state[0][i] === state[2][i]) {
            if (state[0][i] != ' ') {
                c[i].lineWidth = 0.15 * 0.08 * window.innerWidth;
                c[i].strokeStyle = "red";
                c[i + 3].strokeStyle = "red";
                c[i + 6].strokeStyle = "red";
                c[i].beginPath();
                c[i].moveTo(window.innerWidth * 0.04, 0);
                c[i].lineTo(window.innerWidth * 0.04, window.innerWidth * 0.08);
                c[i].stroke();

                c[i + 3].beginPath();
                c[i + 3].moveTo(window.innerWidth * 0.04, 0);
                c[i + 3].lineTo(window.innerWidth * 0.04, window.innerWidth * 0.08);
                c[i + 3].stroke();

                c[i + 6].beginPath();
                c[i + 6].moveTo(window.innerWidth * 0.04, 0);
                c[i + 6].lineTo(window.innerWidth * 0.04, window.innerWidth * 0.08);
                c[i + 6].stroke();
            }

        }
    }

    // Check for diagonal wins
    if (state[0][0] === state[1][1] && state[0][0] === state[2][2]) {
        if (state[0][0] != ' ') {
            c[0].strokeStyle = "red";
            c[4].strokeStyle = "red";
            c[8].strokeStyle = "red";

            c[0].beginPath();
            c[0].moveTo(0, 0);
            c[0].lineTo(window.innerWidth * 0.08, window.innerWidth * 0.08);
            c[0].stroke();

            c[4].beginPath();
            c[4].moveTo(0, 0);
            c[4].lineTo(window.innerWidth * 0.08, window.innerWidth * 0.08);
            c[4].stroke();

            c[8].beginPath();
            c[8].moveTo(0, 0);
            c[8].lineTo(window.innerWidth * 0.08, window.innerWidth * 0.08);
            c[8].stroke();
        }
    }

    if (state[0][2] === state[1][1] && state[0][2] === state[2][0]) {
        if (state[0][2] != ' ') {
            c[2].strokeStyle = "red";
            c[4].strokeStyle = "red";
            c[6].strokeStyle = "red";

            c[2].beginPath();
            c[2].moveTo(window.innerWidth * 0.08, 0);
            c[2].lineTo(0, window.innerWidth * 0.08);
            c[2].stroke();

            c[4].beginPath();
            c[4].moveTo(window.innerWidth * 0.08, 0);
            c[4].lineTo(0, window.innerWidth * 0.08);
            c[4].stroke();

            c[6].beginPath();
            c[6].moveTo(window.innerWidth * 0.08, 0);
            c[6].lineTo(0, window.innerWidth * 0.08);
            c[6].stroke();
        }
    }

    return 0; // No winner, return 0 for a draw or an ongoing game
}



