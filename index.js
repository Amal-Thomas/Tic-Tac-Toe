var grid = document.querySelectorAll("canvas");
var grid_centers = [];
var c = [];
var playerStarts = true;
var difficulty = 1;

for (var i = 0; i < 9; i++) {
    let l = "38%";
    let x = window.innerWidth * 0.42;
    if (i % 3 == 1) {
        l = "46%";
        x = window.innerWidth * 0.50;
    }
    if (i % 3 == 2) {
        l = "54%";
        x = window.innerWidth * 0.58;
    }

    let t = 100 + parseInt(i / 3) * window.innerWidth * 0.08;
    let y = t + window.innerWidth * 0.04;

    grid[i].width = window.innerWidth * 0.08;
    grid[i].height = window.innerWidth * 0.08;
    grid[i].style.left = l;
    grid[i].style.top = t + "px";
    grid[i].style.position = "absolute";
    grid[i].setAttribute('willReadFrequently', '');

    grid_centers.push([x, y]);

    c.push(grid[i].getContext('2d', { willReadFrequently: true }));
}

function drawX(i, permanent) {
    let x = grid_centers[i][0];
    let y = grid_centers[i][1];
    X_size = window.innerWidth * 0.07

    c[i].lineWidth = 0.15 * 0.08 * window.innerWidth;

    c[i].strokeStyle = "black";
    if (permanent == false) {
        c[i].strokeStyle = "grey";
    }

    c[i].beginPath();
    c[i].moveTo(10, 10);
    c[i].lineTo(window.innerWidth * 0.08 - 10, window.innerWidth * 0.08 - 10);
    c[i].stroke();

    c[i].beginPath();
    c[i].moveTo(window.innerWidth * 0.08 - 10, 10);
    c[i].lineTo(10, window.innerWidth * 0.08 - 10);
    c[i].stroke();
}

function drawO(i, permanent) {
    let x = grid_centers[i][0];
    let y = grid_centers[i][1];
    X_size = window.innerWidth * 0.07

    c[i].lineWidth = 0.15 * 0.08 * window.innerWidth;

    c[i].strokeStyle = "black";
    if (permanent == false) {
        c[i].strokeStyle = "grey";
    }

    c[i].beginPath();
    c[i].arc(window.innerWidth * 0.04, window.innerWidth * 0.04, window.innerWidth * 0.04 - 10, 0, Math.PI * 2, false);
    c[i].stroke();
}

// drawX(4, true);
// drawO(1, false);
// drawX(5, false);
// drawX(8, true);
// drawO(2, false);
// drawX(6, true);

const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const windowWidth = window.innerWidth;
const buttonWidth = openPopupBtn.offsetWidth;
const topPosition = window.innerHeight * 0.7;
const leftPosition = (windowWidth / 2) - (buttonWidth / 2);

openPopupBtn.style.position = 'absolute';
openPopupBtn.style.top = topPosition + "px";
openPopupBtn.style.left = leftPosition + "px";

// Add event listeners
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

btn1.addEventListener('click', () => {
    difficulty = 1;
    popup.style.display = 'none';
    playerStarts = !playerStarts;
    for (var i = 0; i < 9; i++) {
        c[i].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
    }
    moves = 0;
    state = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    game_tree = generate_game_tree(state, 'X');
    markX = [false, false, false, false, false, false, false, false, false];
    grid[0].addEventListener('mouseover', mover0);
    grid[0].addEventListener('mouseout', mout0);
    grid[0].addEventListener('click', clicked0);

    grid[1].addEventListener('mouseover', mover1);
    grid[1].addEventListener('mouseout', mout1);
    grid[1].addEventListener('click', clicked1);

    grid[2].addEventListener('mouseover', mover2);
    grid[2].addEventListener('mouseout', mout2);
    grid[2].addEventListener('click', clicked2);

    grid[3].addEventListener('mouseover', mover3);
    grid[3].addEventListener('mouseout', mout3);
    grid[3].addEventListener('click', clicked3);

    grid[4].addEventListener('mouseover', mover4);
    grid[4].addEventListener('mouseout', mout4);
    grid[4].addEventListener('click', clicked4);

    grid[5].addEventListener('mouseover', mover5);
    grid[5].addEventListener('mouseout', mout5);
    grid[5].addEventListener('click', clicked5);

    grid[6].addEventListener('mouseover', mover6);
    grid[6].addEventListener('mouseout', mout6);
    grid[6].addEventListener('click', clicked6);

    grid[7].addEventListener('mouseover', mover7);
    grid[7].addEventListener('mouseout', mout7);
    grid[7].addEventListener('click', clicked7);

    grid[8].addEventListener('mouseover', mover8);
    grid[8].addEventListener('mouseout', mout8);
    grid[8].addEventListener('click', clicked8);


    if (playerStarts == false) {
        let randomIndex = Math.floor(Math.random() * game_tree.children.length);
        let chosenIndex = 0;

        game_tree = game_tree.children[randomIndex];
        chosenIndex = randomIndex;

        drawX(chosenIndex, true);
        let x = Math.floor(chosenIndex / 3);
        let y = chosenIndex % 3;
        state[x][y] = 'X';
        // gamePlay(0);

        clicked = [clicked0, clicked1, clicked2, clicked3, clicked4, clicked5, clicked6, clicked7, clicked8];
        mout = [mout0, mout1, mout2, mout3, mout4, mout5, mout6, mout7, mout8];
        mover = [mover0, mover1, mover2, mover3, mover4, mover5, mover6, mover7, mover8];
        grid[chosenIndex].removeEventListener('click', clicked[chosenIndex]);
        grid[chosenIndex].removeEventListener('mouseout', mout[chosenIndex]);
        grid[chosenIndex].removeEventListener('mouseover', mover[chosenIndex]);
    }


});

btn2.addEventListener('click', () => {
    difficulty = 2;
    popup.style.display = 'none';
    playerStarts = !playerStarts;
    for (var i = 0; i < 9; i++) {
        c[i].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
    }
    moves = 0;
    state = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    game_tree = generate_game_tree(state, 'X');
    markX = [false, false, false, false, false, false, false, false, false];
    grid[0].addEventListener('mouseover', mover0);
    grid[0].addEventListener('mouseout', mout0);
    grid[0].addEventListener('click', clicked0);

    grid[1].addEventListener('mouseover', mover1);
    grid[1].addEventListener('mouseout', mout1);
    grid[1].addEventListener('click', clicked1);

    grid[2].addEventListener('mouseover', mover2);
    grid[2].addEventListener('mouseout', mout2);
    grid[2].addEventListener('click', clicked2);

    grid[3].addEventListener('mouseover', mover3);
    grid[3].addEventListener('mouseout', mout3);
    grid[3].addEventListener('click', clicked3);

    grid[4].addEventListener('mouseover', mover4);
    grid[4].addEventListener('mouseout', mout4);
    grid[4].addEventListener('click', clicked4);

    grid[5].addEventListener('mouseover', mover5);
    grid[5].addEventListener('mouseout', mout5);
    grid[5].addEventListener('click', clicked5);

    grid[6].addEventListener('mouseover', mover6);
    grid[6].addEventListener('mouseout', mout6);
    grid[6].addEventListener('click', clicked6);

    grid[7].addEventListener('mouseover', mover7);
    grid[7].addEventListener('mouseout', mout7);
    grid[7].addEventListener('click', clicked7);

    grid[8].addEventListener('mouseover', mover8);
    grid[8].addEventListener('mouseout', mout8);
    grid[8].addEventListener('click', clicked8);

    if (playerStarts == false) {
        let randomIndex = Math.floor(Math.random() * game_tree.children.length);
        let chosenIndex = 0;

        let choice = Math.round(Math.random()); // 0 or 1
        chosenIndex = choice === 0 ? game_tree.best_child_index : randomIndex;
        game_tree = game_tree.children[chosenIndex];

        drawX(chosenIndex, true);
        let x = Math.floor(chosenIndex / 3);
        let y = chosenIndex % 3;
        state[x][y] = 'X';
        // gamePlay(0);
        clicked = [clicked0, clicked1, clicked2, clicked3, clicked4, clicked5, clicked6, clicked7, clicked8];
        mout = [mout0, mout1, mout2, mout3, mout4, mout5, mout6, mout7, mout8];
        mover = [mover0, mover1, mover2, mover3, mover4, mover5, mover6, mover7, mover8];
        grid[chosenIndex].removeEventListener('click', clicked[chosenIndex]);
        grid[chosenIndex].removeEventListener('mouseout', mout[chosenIndex]);
        grid[chosenIndex].removeEventListener('mouseover', mover[chosenIndex]);
    }


});

btn3.addEventListener('click', () => {
    difficulty = 3;
    popup.style.display = 'none';
    playerStarts = !playerStarts;
    for (var i = 0; i < 9; i++) {
        c[i].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
    }
    moves = 0;
    state = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    game_tree = generate_game_tree(state, 'X');
    markX = [false, false, false, false, false, false, false, false, false];
    grid[0].addEventListener('mouseover', mover0);
    grid[0].addEventListener('mouseout', mout0);
    grid[0].addEventListener('click', clicked0);

    grid[1].addEventListener('mouseover', mover1);
    grid[1].addEventListener('mouseout', mout1);
    grid[1].addEventListener('click', clicked1);

    grid[2].addEventListener('mouseover', mover2);
    grid[2].addEventListener('mouseout', mout2);
    grid[2].addEventListener('click', clicked2);

    grid[3].addEventListener('mouseover', mover3);
    grid[3].addEventListener('mouseout', mout3);
    grid[3].addEventListener('click', clicked3);

    grid[4].addEventListener('mouseover', mover4);
    grid[4].addEventListener('mouseout', mout4);
    grid[4].addEventListener('click', clicked4);

    grid[5].addEventListener('mouseover', mover5);
    grid[5].addEventListener('mouseout', mout5);
    grid[5].addEventListener('click', clicked5);

    grid[6].addEventListener('mouseover', mover6);
    grid[6].addEventListener('mouseout', mout6);
    grid[6].addEventListener('click', clicked6);

    grid[7].addEventListener('mouseover', mover7);
    grid[7].addEventListener('mouseout', mout7);
    grid[7].addEventListener('click', clicked7);

    grid[8].addEventListener('mouseover', mover8);
    grid[8].addEventListener('mouseout', mout8);
    grid[8].addEventListener('click', clicked8);

    if (playerStarts == false) {
        let chosenIndex = 0;

        chosenIndex = game_tree.best_child_index;
        game_tree = game_tree.children[game_tree.best_child_index];

        drawX(chosenIndex, true);
        let x = Math.floor(chosenIndex / 3);
        let y = chosenIndex % 3;
        state[x][y] = 'X';
        // gamePlay(0);
        clicked = [clicked0, clicked1, clicked2, clicked3, clicked4, clicked5, clicked6, clicked7, clicked8];
        mout = [mout0, mout1, mout2, mout3, mout4, mout5, mout6, mout7, mout8];
        mover = [mover0, mover1, mover2, mover3, mover4, mover5, mover6, mover7, mover8];
        grid[chosenIndex].removeEventListener('click', clicked[chosenIndex]);
        grid[chosenIndex].removeEventListener('mouseout', mout[chosenIndex]);
        grid[chosenIndex].removeEventListener('mouseover', mover[chosenIndex]);
    }


});

markX = [false, false, false, false, false, false, false, false, false];
moves = 0;

grid[0].addEventListener('mouseover', mover0);

function mover0(event) {
    console.log(0);
    if (markX[0]) return;
    if (playerStarts) {
        drawX(0, false);
    } else {
        drawO(0, false);
    }
}

grid[0].addEventListener('mouseout', mout0);

function mout0(event) {
    if (markX[0]) return;
    c[0].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[0].addEventListener('click', clicked0);

function clicked0(event) {
    markX[0] = true;
    console.log("whoo");
    if (playerStarts) {
        drawX(0, true);
    } else {
        drawO(0, true);
    }
    console.log("whoo");
    gamePlay(0);
    grid[0].removeEventListener('click', clicked0);
    grid[0].removeEventListener('mouseout', mout0);
    grid[0].removeEventListener('mouseover', mover0);
}


grid[1].addEventListener('mouseover', mover1);

function mover1(event) {
    console.log(1);
    if (markX[1]) return;
    if (playerStarts) {
        drawX(1, false);
    } else {
        drawO(1, false);
    }
}

grid[1].addEventListener('mouseout', mout1);

function mout1(event) {
    if (markX[1]) return;
    c[1].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[1].addEventListener('click', clicked1);

function clicked1(event) {
    markX[1] = true;
    if (playerStarts) {
        drawX(1, true);
    } else {
        drawO(1, true);
    }
    gamePlay(1);
    grid[1].removeEventListener('click', clicked1);
    grid[1].removeEventListener('mouseout', mout1);
    grid[1].removeEventListener('mouseover', mover1);
}



grid[2].addEventListener('mouseover', mover2);

function mover2(event) {
    console.log(2);
    if (markX[2]) return;
    if (playerStarts) {
        drawX(2, false);
    } else {
        drawO(2, false);
    }
}

grid[2].addEventListener('mouseout', mout2);

function mout2(event) {
    if (markX[2]) return;
    c[2].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[2].addEventListener('click', clicked2);

function clicked2(event) {
    markX[2] = true;
    if (playerStarts) {
        drawX(2, true);
    } else {
        drawO(2, true);
    }
    console.log("2222");
    gamePlay(2);
    grid[2].removeEventListener('click', clicked2);
    grid[2].removeEventListener('mouseout', mout2);
    grid[2].removeEventListener('mouseover', mover2);
}



grid[3].addEventListener('mouseover', mover3);

function mover3(event) {
    console.log(3);
    if (markX[3]) return;
    if (playerStarts) {
        drawX(3, false);
    } else {
        drawO(3, false);
    }
}

grid[3].addEventListener('mouseout', mout3);

function mout3(event) {
    if (markX[3]) return;
    c[3].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[3].addEventListener('click', clicked3);

function clicked3(event) {
    markX[3] = true;
    if (playerStarts) {
        drawX(3, true);
    } else {
        drawO(3, true);
    }
    gamePlay(3);
    grid[3].removeEventListener('click', clicked3);
    grid[3].removeEventListener('mouseout', mout3);
    grid[3].removeEventListener('mouseover', mover3);
}

grid[4].addEventListener('mouseover', mover4);

function mover4(event) {
    console.log(4);
    if (markX[4]) return;
    if (playerStarts) {
        drawX(4, false);
    } else {
        drawO(4, false);
    }
}

grid[4].addEventListener('mouseout', mout4);

function mout4(event) {
    if (markX[4]) return;
    c[4].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[4].addEventListener('click', clicked4);

function clicked4(event) {
    markX[4] = true;
    if (playerStarts) {
        drawX(4, true);
    } else {
        drawO(4, true);
    }
    gamePlay(4);
    grid[4].removeEventListener('click', clicked4);
    grid[4].removeEventListener('mouseout', mout4);
    grid[4].removeEventListener('mouseover', mover4);
}

grid[5].addEventListener('mouseover', mover5);

function mover5(event) {
    console.log(5);
    if (markX[5]) return;
    if (playerStarts) {
        drawX(5, false);
    } else {
        drawO(5, false);
    }
}

grid[5].addEventListener('mouseout', mout5);

function mout5(event) {
    if (markX[5]) return;
    c[5].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[5].addEventListener('click', clicked5);

function clicked5(event) {
    markX[5] = true;
    if (playerStarts) {
        drawX(5, true);
    } else {
        drawO(5, true);
    }
    gamePlay(5);
    grid[5].removeEventListener('click', clicked5);
    grid[5].removeEventListener('mouseout', mout5);
    grid[5].removeEventListener('mouseover', mover5);
}



grid[6].addEventListener('mouseover', mover6);

function mover6(event) {
    console.log(6);
    if (markX[6]) return;
    if (playerStarts) {
        drawX(6, false);
    } else {
        drawO(6, false);
    }
}

grid[6].addEventListener('mouseout', mout6);

function mout6(event) {
    if (markX[6]) return;
    c[6].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[6].addEventListener('click', clicked6);

function clicked6(event) {
    markX[6] = true;
    if (playerStarts) {
        drawX(6, true);
    } else {
        drawO(6, true);
    }
    gamePlay(6);
    grid[6].removeEventListener('click', clicked6);
    grid[6].removeEventListener('mouseout', mout6);
    grid[6].removeEventListener('mouseover', mover6);
}

grid[7].addEventListener('mouseover', mover7);

function mover7(event) {
    console.log(7);
    if (markX[7]) return;
    if (playerStarts) {
        drawX(7, false);
    } else {
        drawO(7, false);
    }
}

grid[7].addEventListener('mouseout', mout7);

function mout7(event) {
    if (markX[7]) return;
    c[7].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[7].addEventListener('click', clicked7);

function clicked7(event) {
    markX[7] = true;
    if (playerStarts) {
        drawX(7, true);
    } else {
        drawO(7, true);
    }
    gamePlay(7);
    grid[7].removeEventListener('click', clicked7);
    grid[7].removeEventListener('mouseout', mout7);
    grid[7].removeEventListener('mouseover', mover7);
}

grid[8].addEventListener('mouseover', mover8);

function mover8(event) {
    console.log(8);
    if (markX[8]) return;
    if (playerStarts) {
        drawX(8, false);
    } else {
        drawO(8, false);
    }
}

grid[8].addEventListener('mouseout', mout8);

function mout8(event) {
    if (markX[8]) return;
    c[8].clearRect(0, 0, windowWidth * 0.8, windowWidth * 0.8);
}

grid[8].addEventListener('click', clicked8);

function clicked8(event) {
    markX[8] = true;
    if (playerStarts) {
        drawX(8, true);
    } else {
        drawO(8, true);
    }
    gamePlay(8);
    grid[8].removeEventListener('click', clicked8);
    grid[8].removeEventListener('mouseout', mout8);
    grid[8].removeEventListener('mouseover', mover8);
}
