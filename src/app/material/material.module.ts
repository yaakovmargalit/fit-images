import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const material: any = [
  MatButtonModule,
  DragDropModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ], exports: material
})
export class MaterialModule { }
