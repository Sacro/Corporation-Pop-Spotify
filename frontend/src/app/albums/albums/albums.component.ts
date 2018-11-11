import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  protected searchResults;

  constructor(private searchService: SearchService) {
    this.searchService.searchResults.subscribe(value => {
      this.searchResults = value;
      console.log(value);
    });
  }

  ngOnInit() {}
}
