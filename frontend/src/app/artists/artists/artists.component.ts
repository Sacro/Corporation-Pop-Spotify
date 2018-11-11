import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  protected searchResults;

  constructor(private searchService: SearchService) {
    this.searchService.searchResults.subscribe(value => {
      this.searchResults = value;
      console.log(value);
    });
  }

  ngOnInit() {}
}
