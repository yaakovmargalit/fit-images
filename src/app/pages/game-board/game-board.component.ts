import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Iboard } from 'src/app/model';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }
  private subscription: Subscription
  public board: Iboard

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.board = data['board']
    })    
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
