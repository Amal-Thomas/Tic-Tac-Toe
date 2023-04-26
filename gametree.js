class TreeNode {
    constructor(state, player) {
        this.state = state;
        this.children = [];
        this.best_child_index = null;
        this.player = player;
        this.best_move = null;
        this.optimal_value = null;
    }

    add_child(child) {
        this.children.push(child);
    }

    is_leaf() {
        return this.children.length === 0;
    }
}

function generate_game_tree(state, player) {
    /* Generate a tic-tac-toe game tree given the current state and player. */
    const root = new TreeNode(state, player);

    if (is_game_over(state)) {
        let priority = 1 + number_of_blank(state);
        root.optimal_value = priority * evaluate_state(state); // Set optimal value for game over states
        return root;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (state[i][j] === ' ') {
                const child_state = state.map(row => row.slice());
                child_state[i][j] = player;
                const child_player = player === 'X' ? 'O' : 'X';
                const child_node = generate_game_tree(child_state, child_player);
                root.add_child(child_node);
            }
        }
    }

    if (player === 'X') {
        // Find the child with the highest optimal value for player X
        root.optimal_value = Math.max(...root.children.map(child => child.optimal_value));
        const best_child = root.children.find(child => child.optimal_value === root.optimal_value);
        root.best_child_index = root.children.indexOf(best_child);
        root.best_move = best_child.state;
    } else {
        // Find the child with the lowest optimal value for player O, ignoring null or undefined values
        root.optimal_value = Math.min(...root.children.filter(child => child.optimal_value != null).map(child => child.optimal_value));
        const best_child = root.children.find(child => child.optimal_value === root.optimal_value);
        root.best_child_index = root.children.indexOf(best_child);
        root.best_move = best_child.state;
    }

    return root;
}

function number_of_blank(state) {
    let number_of_blanks = 0;
    for (let row of state) {
        for (let element of row) {
            if (element === ' ') {
                number_of_blanks++;
            }
        }
    }
    return number_of_blanks;
}

function is_game_over(state) {
    // Check for row wins
    for (let row of state) {
        if (row[0] === row[1] && row[0] === row[2] && row[0] !== ' ') {
            return true;
        }
    }

    // Check for column wins
    for (let i = 0; i < 3; i++) {
        if (state[0][i] === state[1][i] && state[0][i] === state[2][i] && state[0][i] !== ' ') {
            return true;
        }
    }

    // Check for diagonal wins
    if (state[0][0] === state[1][1] && state[0][0] === state[2][2] && state[0][0] !== ' ') {
        return true;
    }

    if (state[0][2] === state[1][1] && state[0][2] === state[2][0] && state[0][2] !== ' ') {
        return true;
    }

    // Check for draw
    for (let row of state) {
        if (row.includes(' ')) {
            return false; // Game is not over if there are still empty cells
        }
    }

    return true; // Game is over if all cells are filled and no winner is found
}

function evaluate_state(state) {
    // Check for row wins
    for (let row of state) {
        if (row[0] === row[1] && row[0] === row[2]) {
            if (row[0] === 'X') {
                return 10; // Player X wins, assign a positive value
            } else if (row[0] === 'O') {
                return -10; // Player O wins, assign a negative value
            }
        }
    }

    // Check for column wins
    for (let i = 0; i < 3; i++) {
        if (state[0][i] === state[1][i] && state[0][i] === state[2][i]) {
            if (state[0][i] === 'X') {
                return 10; // Player X wins, assign a positive value
            } else if (state[0][i] === 'O') {
                return -10; // Player O wins, assign a negative value
            }
        }
    }

    // Check for diagonal wins
    if (state[0][0] === state[1][1] && state[0][0] === state[2][2]) {
        if (state[0][0] === 'X') {
            return 10; // Player X wins, assign a positive value
        } else if (state[0][0] === 'O') {
            return -10; // Player O wins, assign a negative value
        }
    }

    if (state[0][2] === state[1][1] && state[0][2] === state[2][0]) {
        if (state[0][2] === 'X') {
            return 10; // Player X wins, assign a positive value
        } else if (state[0][2] === 'O') {
            return -10; // Player O wins, assign a negative value
        }
    }

    return 0; // No winner, return 0 for a draw or an ongoing game
}


