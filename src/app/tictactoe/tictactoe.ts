import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  imports: [],
  templateUrl: './tictactoe.html',
  styleUrl: './tictactoe.css'
})

export class Tictactoe {
  Board = ["", "", "", "", "", "", "", "", ""];
  Columns = [0, 1, 2];
  Rows = [0, 1, 2];
  Player = "X";
  Winner = "";
  Moves = 0;
  winCombo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  checkWinner() {
    for (let combo of this.winCombo) {
      const [a, b, c] = combo;
      if (this.Board[a] && this.Board[a] === this.Board[b] && this.Board[a] === this.Board[c]) {
        return true;
      }
    }
    return false;
  }

  restart() {
    this.Board = ["", "", "", "", "", "", "", "", ""];
    this.Player = "X";
    this.Winner = "";
    this.Moves = 0;
  }

  makeMove(index: number) {
    if (this.Board[index] === "" && this.Winner === "") {
      this.Board[index] = this.Player;
      if (this.checkWinner()) {
        this.Winner = "Winner Player: "+this.Player;
        return;
      }
      if (this.Moves === 8 && this.Winner === "") {
        this.Winner = "Match Draw";
        return;
      }
      this.Player = this.Player === "X" ? "O" : "X";
      this.Moves++;
    }
  }
}
