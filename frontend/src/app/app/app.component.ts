import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean;
  search: string;
  type: string;

  constructor(private http: HttpClient) {
    this.type = 'artist';
  }

  async onSearchClicked() {
    if (this.search) {
      this.isLoading = true;
      this.http
        .get('http://localhost:3000/spotify/search', {
          params: {
            q: this.search,
            type: this.type
          }
        })
        .subscribe(
          data => {
            this.isLoading = false;
            console.log(data);
          },
          _error => {
            this.isLoading = false;
          }
        );
    }
  }
}
