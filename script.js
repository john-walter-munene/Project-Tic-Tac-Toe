// Gameboard 
const Gameboard = (function() {
    const board = ["", "", "", "", "", "", "", ""];

    const setField = (index, sign) => {
        board[index] = sign;
    };

    const getField = (index) => {
        return board[index];
    };

    const resetFields = () => {
        for (let i=0; i<board.length; i++){
            board[i] = "";
        };
    };

    return {setField, getField, resetFields, board};
})();

// Game controller
var GameContoller = (function() {
    return {};
})();

// Players
const Player = (sign) => {
    this.sign = sign

    const getSign = () =>{
        return sign;
    }

    return { getSign };
}