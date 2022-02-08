// making variables of music files for turn, gameover, and ting.
let music = new Audio("../tune/music.mp3")
let audioTurn = new Audio("../tune/ting.mp3")
let gameover = new Audio("../tune/gameover.mp3")




let nitesh = confirm("Do You Wan't To Play Tic Tac Toe Game?")
let content = document.getElementsByClassName("gameContainer")[0]



if (nitesh == true) {
    content.style.visibility = "visible"




}


//  play again button function 
function reset() {

    document.querySelector('.line').style.display = "none"

    let gifwinner = document.getElementsByClassName('gif-winner')[0];
    if (gifwinner.style.visibility == "visible") {
        gifwinner.style.visibility = "hidden";

    }

    let boxtext = document.querySelectorAll('.box-text');

    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    let isGameover = false
    if (isGameover == false) {

        document.getElementsByClassName('text-turn')[0].innerText = " PLayer" + " " + turn + " " + "Turn"
    }

    gameover.play()
    music.pause()




}

let isGameover = false


let turn = "X"
// change turn function 
const changeturn = () => {
    return turn === "X" ? "O" : "X"  //ternary opertor if turn = X return 0 if turn is not equal to x return x

}

// winner check function 
const CheckWin = () => {
    console.log("let's Check who wOn")
    let boxtexts = document.getElementsByClassName('box-text')
    let wins = [

        [0, 1, 2, 5, 5, 0],
        [0, 3, 6, -5, 15, 90],
        [6, 7, 8, 5, 25, 0],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
        [3, 4, 5, 5, 15, 0],
        [1, 4, 7, 5, 15, 90],
    ]

    wins.forEach(function (e) {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            isGameover = true
            
            
            music.play()
            


            document.getElementsByClassName('text-turn')[0].innerText = "Hurray! Player " + boxtexts[e[0]].innerText + " " + "Won"

            let gifwinner = document.getElementsByClassName('gif-winner')[0];
            if (gifwinner.style.visibility == "hidden") {
                gifwinner.style.visibility = "visible";

            }

            document.querySelector('.line').style.visibility = "visible"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate( ${e[5]}deg)`



        }

    })

}
// input X and O logic //

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn()
            audioTurn.play()
            CheckWin()
            if (isGameover != true) {

                document.getElementsByClassName('text-turn')[0].innerText = " PLayer" + " " + turn + " " + "Turn"
            }

        }


    })

});








