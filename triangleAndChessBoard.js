//hard coded version
function triangle() {
  let sign = "#";
  let signArray = [];
  for (let i = 1; i <= 7; i++) {
    signArray.push(sign);
    console.log(signArray.join(""));
  }
}
triangle();


//simple version
function simpleTriangle() {
  for (let line = "#"; line.length < 8; line += "#") console.log(line);
}
simpleTriangle();

(function chessBoard() {
  let odd = " # # # #";
  let even = "# # # # ";
  for (let i = 1; i <= 8; i++) {
    if (i % 2 != 0) {
      console.log(odd);
    } else {
      console.log(even);
    }
  }
})();


//pro version
function chessBoard2(height, width) {
  let odd = "";
    let even = "";
  for (let i = 1; i <= width; i++) {
    if (i % 2 != 0) {
      odd += " ";
       even += "#";
    } else {
      odd += "#";
       even += " ";
    }
  }
  for (let i = 1; i <= height; i++) {
    if (i % 2 != 0) {
      console.log(odd);
    } else {
      console.log(even);
    }
  }
}

chessBoard2(16, 16);


//simple version
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
