let piecesLeft = 3;
let piecePosition;
let playerOnePieces = [];
let playerTwoPieces = [];


let playSpace = document.querySelectorAll("table td");

for (let i = 0; i < playSpace.length; i++)
{
    playSpace[i].addEventListener("click", changeBackgroundColor);

    function changeBackgroundColor()
    {
        let element = playSpace[i];

        element.style.backgroundColor = "gray";
        piecesLeft--;

        playerOnePieces.push(element);

        console.log(playerOnePieces);

        if (piecesLeft == 0)
        {
            setTimeout(resetBoard, 200);
            piecesLeft = 3;
        }
    }
}

function resetBoard()
{
    for (let i = 0; i < playSpace.length; i++)
    {
        let element = playSpace[i];

        element.style.backgroundColor = "white";
    }
}