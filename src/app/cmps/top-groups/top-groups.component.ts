import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'top-groups',
  templateUrl: './top-groups.component.html',
  styleUrls: ['./top-groups.component.scss']
})
export class TopGroupsComponent implements OnInit {
@Input() groups:any
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
