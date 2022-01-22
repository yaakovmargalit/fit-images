import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent implements OnInit {
@Input() game
@Output() removeGame = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onRemoveGame(){
this.removeGame.emit(this.game.id)
  }
}
