import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  protected searchResults;

  constructor(private searchService: SearchService) {
    this.searchService.searchResults.subscribe(value => {
      this.searchResults = value;
      console.log(value);
    });
  }

  ngOnInit() {}
}
