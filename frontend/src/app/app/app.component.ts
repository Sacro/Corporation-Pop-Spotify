import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean;
  search: string;

  onSearchClicked() {
    if (this.search) {
      console.log(this.search);
    }
  }
}
