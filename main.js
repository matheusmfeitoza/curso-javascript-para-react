import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import CardFrontBack from "./src/components/CardFrontBack"
import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";
const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend",`
    ${ScoreBoard()}
    ${BoardGame(4)}
`
);
const getClick = document.querySelectorAll(".card-front-back");
for(let i = 0; i < getClick.length; i++){
    getClick[i].addEventListener('click',function(){
        if(getClick[i].className === "card-front-back -active"){
            getClick[i].className = "card-front-back"
        }else{
            getClick[i].className += " -active"
        }
    })
}

