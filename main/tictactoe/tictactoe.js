//this is my solo project i already presented it, we had to add it to our project just as design compliment(so we can have six icons in our website)
var playerText = document.getElementById('playerText')
var restartBtn = document.getElementById('restartBtn')
var boxes = Array.from(document.getElementsByClassName('box'))

var winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

var oText = "O"
var xText = "X"
var currentPlayer = xText
var spaces = Array(9).fill(null)

function startGame(){
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    var id = e.target.id
    

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText.innerHTML = currentPlayer+" has won!"
            var winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }

        if(currentPlayer==xText){
            currentPlayer=oText
        }
        else{
            currentPlayer=xText
        }
    }
}

var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function playerHasWon() {
    for (var condition of winningCombos) {
        var [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            boxes.forEach(box => box.removeEventListener('click', boxClicked))
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'iTicTacToe'

    currentPlayer = xText
}

startGame()