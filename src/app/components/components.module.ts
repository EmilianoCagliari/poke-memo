import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardTableComponent } from './card-table/card-table.component';



@NgModule({
  declarations: [
    CardComponent,
    CardTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardTableComponent
  ]
})
export class ComponentsModule { }
