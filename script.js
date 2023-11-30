let queens = [];
let ans = true;
let icon;
let board=document.querySelector(".chessboard");
let square;
// ------------creating squares------------------------------------
    for(let row=0;row<8;row++)
    {
        for(let col=0;col<8;col++)
        {
            square=document.createElement("div");
            ((row%2==0 && col%2==0)||(row%2!=0 && col%2!=0))?square.className="square white": square.className="square black" ;
            square.setAttribute("data-row",row);
            square.setAttribute("data-col",col);
            board.appendChild(square);
        }
    }
// ----------------------------------------------------------------
function placeQueens(event) {
    if (queens.length < 8) {
        let clicked = event.target;
        icon = document.createElement("div");
        icon.className = "queenclass";
        let { row, col } = clicked.dataset;

        if(row!==undefined && col!== undefined)
        {
            icon.innerHTML = "&#9819";
            clicked.appendChild(icon);
            isSafe(parseInt(row), parseInt(col));
            queens.push({ row: parseInt(row), col: parseInt(col) });
        }
        else{
            alert("queen already placed !");
        }
    }
    if (queens.length === 8) {
        let result = document.querySelector("h1");
        let btn=document.querySelector(".btn");
           btn.innerHTML="play again";
            btn.className="play";
        (ans === true) ? result.innerHTML = "You Won &#9786" : result.innerHTML = "You Lost &#x2639";
        let play=document.querySelector(".play");
        play.addEventListener('click',removeh1);
        
    }

}
// -----------------------logic Part--------------------------------------
function isSafe(row, col) {
    
    for (queen of queens) {
        if (queen.row == row || queen.col == col) {
            ans = false;
            break;
        }
        if (Math.abs(queen.row - row) === Math.abs(queen.col - col)) {

            ans = false;
            break;
        }
    }
}
// ----------------------------logic Part------------------------------------------

let squares=document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener('click', placeQueens);
});

let btn=document.querySelector('.btn');
btn.addEventListener('click',clear);

function clear(event)
{
    for(square of squares)
    {
        square.innerHTML="";
    }
    queens.splice(0,queens.length);
}
function removeh1()
{
    let remove=document.querySelector(".result");
    remove.innerHTML="";  
    ans=true;
    clear();
    btn.className="btn";
    btn.innerHTML="clear board";
    queens.splice(0,queens.length);
}