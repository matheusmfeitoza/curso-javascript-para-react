import './style.css';
import CardGame from "../../components/CardGame";

function BoardGame(amountCards){
    let $htmlCardGame = CardGame();
    let $htmlBoardCardGame = $htmlCardGame.repeat(amountCards);
    return /*html*/`<section><section class="board-game">${$htmlBoardCardGame}</section></section>`
};
export default BoardGame;