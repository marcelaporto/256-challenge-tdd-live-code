function boardFromString(string) {
  var board = []

  for (var i = 0; i < 4; i++) {
    board[i] = []
    for (var j = 0; j < 4; j++) {
      board[i][j] = parseInt(string[i*4+j])
    }
  }

  return board
}

function moveDown(board) {
  var transposedBoard = transpose(board)
  var newBoard = []

  transposedBoard.forEach(function(row){
    var movedRow = moveRowRight(row)
    newBoard.push(movedRow)
  })

  return transpose(newBoard)
}

function transpose(board) {
  var newBoard = [[],[],[],[]]

  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      newBoard[i][j] = board[j][i]
      console.log("newBoard:",newBoard)
    }
  }

  return newBoard
}

function moveRowRight(row){
  var cleanRow = row.filter(function(item){ return item != 0})
  var summedRow = addAdjacentCells(cleanRow)

  return addZeroes(summedRow)
}

function addAdjacentCells(row){
  for (var i = row.length - 1; i >= 0; i--) {
    if (row[i] == row[i - 1]){
      row[i - 1] = row[i] + row[i - 1]
      row[i] = 0
      i--
    }
  }
  return row
}

function addZeroes(row){
  var cleanRow = row.filter(function(item){ return item != 0})
  var zeroesToAdd = 4 - cleanRow.length

  for (var i = 0; i < zeroesToAdd; i++) {
    cleanRow = [0].concat(cleanRow)
  }

  return cleanRow
}
