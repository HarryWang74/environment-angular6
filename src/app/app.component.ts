import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    position: 'top'
  };

  onClick() {
    /*
      this.config.position = 'bottom';

      Objects, arrays, and functions 作为 copy of reference 传给 component
      这样触发 child 的 onChangeCheck
    */
    this.config = {
      position: 'bottom'
    }
  }
}
