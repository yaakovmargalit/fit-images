import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-groups',
  templateUrl: './bottom-groups.component.html',
  styleUrls: ['./bottom-groups.component.scss']
})
export class BottomGroupsComponent implements OnInit {
  @Input() groups:any

  constructor() { }

  ngOnInit(): void {
  }

}
