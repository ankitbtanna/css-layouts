import { Component } from '@angular/core';
import { Layout } from './app.models';
import { LAYOUTS } from './app.constant';

@Component({
  selector: 'csslayouts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  layouts = LAYOUTS;
  activeLayout = 'super-centered';

  setActiveLayout(layout: Layout) {
    this.activeLayout = layout.component;
  }
}
