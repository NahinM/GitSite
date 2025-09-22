import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-g2048',
  imports: [],
  templateUrl: './g2048.html',
  styleUrl: './g2048.css'
})
export class G2048 {
  board = [[0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  score = 0;
  gameOver = false;
  stateChange = false;

  restart() {
    this.board = [[0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    this.score = 0;
    this.gameOver = false;
  }

  moveUp() {
    for (let j = 0; j < 4; j++){
      let s = 0;
      
      for (let i = 0; i < 4; i++) {
        let at = this.board[i][j];
        if (at == 0) continue;
        this.board[i][j] = 0;
        let pre = this.board[s][j];
        if(pre!=at && pre!=0)s++;
        this.board[s][j] += at;
        this.score = Math.max(this.score, this.board[s][j]);
        if(pre==at)s++;
      }
    }
  }

  moveDown() {
    for (let j = 0; j < 4; j++){
      let s = 3;
      
      for (let i = 3; i >=0; i--) {
        let at = this.board[i][j];
        if (at == 0) continue;
        this.board[i][j] = 0;
        let pre = this.board[s][j];
        if(pre!=at && pre!=0)s--;
        this.board[s][j] += at;
        this.score = Math.max(this.score, this.board[s][j]);
        if(pre==at)s--;
      }
    }
  }

  moveLeft() {
    for (let j = 0; j < 4; j++){
      let s = 0;
      
      for (let i = 0; i < 4; i++) {
        let at = this.board[j][i];
        if (at == 0) continue;
        this.board[j][i] = 0;
        let pre = this.board[j][s];
        if(pre!=at && pre!=0)s++;
        this.board[j][s] += at;
        this.score = Math.max(this.score, this.board[j][s]);
        if(pre==at)s++;
      }
    }
  }

  moveRight() {
    for (let j = 0; j < 4; j++){
      let s = 3;
      
      for (let i = 3; i >= 0; i--) {
        let at = this.board[j][i];
        if (at == 0) continue;
        this.board[j][i] = 0;
        let pre = this.board[j][s];
        if(pre!=at && pre!=0)s--;
        this.board[j][s] += at;
        this.score = Math.max(this.score, this.board[j][s]);
        if(pre==at)s--;
      }
    }
  }

  addRandomTile() {
    let r = Math.floor(Math.random() * 4);
    let c = Math.floor(Math.random() * 4);
    let v = Math.random() < 0.9 ? 2 : 4;
    while (this.board[r][c] != 0) {
      r = Math.floor(Math.random() * 4);
      c = Math.floor(Math.random() * 4);
    }
    this.board[r][c] = v;
  }

  isGameOver() {
    for (let row of this.board) {
        for (let cell of row) {
          if (cell==0) return false;
        }
      }
      return true;
  }

  @HostListener('window:keydown', ['$event'])
  updateState(event: KeyboardEvent) {
      if (this.gameOver) return;
      const previousBoard: number[][] = this.board.map(row => [...row]);
      switch (event.key) {
        case 'ArrowUp':
          this.moveUp();
          break;
        case 'ArrowDown':
          this.moveDown();
          break;
        case 'ArrowLeft':
          this.moveLeft();
          break;
        case 'ArrowRight':
          this.moveRight();
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }

      this.stateChange = JSON.stringify(previousBoard) !== JSON.stringify(this.board);

      if (this.isGameOver()) {
        this.gameOver = true;
        return;
      }
      if (!this.stateChange) return;
      this.addRandomTile();
    }
}
