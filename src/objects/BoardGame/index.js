import './style.css';
import CardGame from "../../components/CardGame";

function BoardGame(amountCards){
    let $htmlBoardCardGame = CardGame().repeat(amountCards);
    return`
        <section class="board-game">
        ${$htmlBoardCardGame}
        </section>
    `
}
export default BoardGame;