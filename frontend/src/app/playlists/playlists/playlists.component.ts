import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  protected searchResults;

  constructor(private searchService: SearchService) {
    this.searchService.searchResults.subscribe(value => {
      this.searchResults = value;
      console.log(value);
    });
  }

  ngOnInit() {}
}
