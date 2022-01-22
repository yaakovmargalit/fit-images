import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor() { }
  @Input() group: any
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      return
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.container.data);
      
    }
  }

}
