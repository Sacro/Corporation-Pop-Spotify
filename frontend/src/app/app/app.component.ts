import { Component } from '@angular/core';

import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading: boolean;
  search: string;

  constructor(private searchService: SearchService) {}

  async onKeyDown(event) {
    if (event.keyCode === 13) {
      this.onSearchClicked();
    }
  }

  async onSearchClicked() {
    if (this.search) {
      this.isLoading = true;
      this.searchService
        .search(this.search)
        .subscribe(
          _data => (this.isLoading = false),
          _error => (this.isLoading = false)
        );
    }
  }
}
