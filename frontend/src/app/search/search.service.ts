import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class SearchService {
  baseUrl: string;

  public searchResults: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = environment.apiUrl;
  }

  public search(q: string) {
    const type = this.router.url.slice(1).slice(0, -1);
    return this.http
      .get(`${this.baseUrl}/spotify/search`, {
        params: {
          q,
          type
        }
      })
      .pipe(
        map(res => {
          this.searchResults.next(res);
          return res;
        })
      );
  }
}
