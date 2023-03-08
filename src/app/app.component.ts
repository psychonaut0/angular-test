import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  inputValue = ''

  formChange(e: HTMLInputElement) {
    this.inputValue = e.value
  }

}
