import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
const API_KEY = '42dfb92c';
@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}
  search(type?, searchValue = 'about'): Promise<any> {
    const typeURI = type ? `&type=${type}` : ``;
    return this.http
      .get<any[]>(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}` + typeURI
      )
      .toPromise();
  }
  getSeriesById(id): Promise<any> {
    return this.http
      .get<any[]>(
        `http://www.omdbapi.com/?apikey=${API_KEY}&type=series&i=${id}`
      )
      .toPromise();
  }
  getFilmById(id): Promise<any> {
    return this.http
      .get<any[]>(
        `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&i=${id}`
      )
      .toPromise();
  }
}
