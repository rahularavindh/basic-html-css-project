let scoreCount = 0;
let rcbScoreCount = 0;
function score() {
    scoreCount+=1;
    document.querySelector("#csk-score").innerHTML=`CSK: ${scoreCount}`;
}
function score1() {
    if(scoreCount % 4===0) {
        rcbScoreCount+=1;
        scoreCount+=1;
        document.querySelector("#rcb-score").innerHTML=`RCB: ${rcbScoreCount}`;
    }
    else{
        scoreCount+=1;
        document.querySelector("#csk-score").innerHTML=`CSK: ${scoreCount}`;
    }

}