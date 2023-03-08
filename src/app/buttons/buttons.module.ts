import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlainComponent } from './plain/plain.component';
import { ButtonsComponent } from './buttons.component';
import { FillComponent } from './fill/fill.component';



@NgModule({
  declarations: [
    PlainComponent,
    ButtonsComponent,
    FillComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsModule {


}
