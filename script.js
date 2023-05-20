"use strict";

// Player uses Factory Function
const player = (sign) => {
    this.sign = sign;

    const getSign = ()=> {
        return sign;
    };

    return {getSign};
};

// Game Board
const logicalGameBoard = (()=>{
    const board = ["", "", "", "", "", "", "", "", ""];

    const setField = (index, sign) => {
        board[index]=sign;
    };

    const getField = (index) => {
        return board[index];
    };

    const resetField = ()=> {
        for (let i=0; i<board.length; i++) {
            board[i] = "";
        };
    };

    return {setField, getField, resetField, board}
})();

// Display Handler
const displayController = (()=>{
    const gameInitializerButton = document.querySelector('.game-initializer__action-btn'),
          gameConsole = document.querySelector('main'),
          resultDisplayer = document.querySelector('.result-conveyer'),
          nextRoundBtn = document.querySelector('.result-conveyer__continue-btn'),
          quitGameBtn = document.querySelector('.result-conveyer__reset-btn'),
          fieldElements = document.querySelectorAll('.game-board__field'),
          fieldElementsStates = document.querySelectorAll('.game-board__state'),
          restartBtn = document.querySelector('.main__restart-btn'),
          scoreDisplayerEelements = document.querySelector('.main__score-displayer');

    let playerXScore = 0, playerOScore = 0, tiedMatches = 0, tie = false;

    gameInitializerButton.addEventListener('click', (e)=>{
        activateBtn(e.target);

        setTimeout(()=>{
            setActiveStates()
            e.target.parentElement.ClassList.add('disabled');
            gameConsole.ClassList.remove('disabled');
        }, 500);
    });

    const activateBtn = (element) => {
        function removeTransition(e){
            if (e.propertyName !== 'transform') return;
            e.target.ClassList.remove('clicked');
        };
        element.ClassList.add('clicked');
        element.addEventListener('transitionend', removeTransition);
    };

})();