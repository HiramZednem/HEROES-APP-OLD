import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }

    .toolbar {
      display: flex;
      justify-content: space-between;
    }
  `]
})
export class HomeComponent {

}
