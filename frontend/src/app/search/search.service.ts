import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public search(q: string, type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/spotify/search`, {
      params: {
        q,
        type
      }
    });
  }
}
