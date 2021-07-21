import './style.css';
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amountCards){
    let $htmlCardFrontBack = CardFrontBack();
    let $htmlBoardCardGame = $htmlCardFrontBack.repeat(amountCards);
    return /*html*/`
    <section class="board-game">
        ${$htmlBoardCardGame}
    </section>
`
};
export default BoardGame;