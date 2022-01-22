import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iboard } from 'src/app/model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   boards$: Observable<Iboard[]>
  constructor(private gameService: GameService) { }
  ngOnInit(): void {
    this.gameService.loadBoards()    
    this.boards$ = this.gameService.boards$
  }

  removeGame(id){
this.gameService.removeGame(id)    
  }

}
