import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-games',
  imports: [RouterLink],
  templateUrl: './games.html',
  styleUrl: './games.css'
})

export class Games {
  allGames = [
    { 
      name: "Tic Tac Toe",
      description:"some description", 
      link: "/tictactoe",
      image: "tictactoe.png"
    },
    { 
      name: "Chess",
      description:"some description",
      link: "/chess",
      image: "chess.png"
    },
    { name: "Dino Run",
      description:"some description",
      link: "/dino",
      image: "dino.png"
    },
    { 
      name: "Snake",
      description:"some description",
      link: "/snake",
      image: "snake.png"
    },
    { 
      name: "Minesweeper",
      description:"some description",
      link: "/minesweeper",
      image: "minesweeper.png"
    },
    { 
      name: "2048",
      description:"some description",
      link: "/g2048",
      image: "g2048.png"
    }
  ];
}
