import './style.css'
import CardGame from "../../components/CardGame";

function BoardGame(amountCards){
    let $htmlBoardCardGame = CardGame().repeat(amountCards);
    return`
        ${$htmlBoardCardGame}
    `
}
export default BoardGame;