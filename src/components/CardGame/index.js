import "./style.css"
function CardGame(logo = "alura-pixel", alt = "Logo Alura") {
    return /*html*/`
            <article class="card-game">
                <img src="/images/${logo}.png" alt=${alt}">
            </article>
    `
};
export default CardGame;