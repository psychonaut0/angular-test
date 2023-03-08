import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'button-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})
export class FillComponent {

  @Output() newClickEvent = new EventEmitter<string>();

  notifyClick(value: string) {
    this.newClickEvent.emit(value)
  }

}
