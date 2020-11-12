import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_KEY = '42dfb92c';
@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  constructor(private http: HttpClient) {}
  search(type?, searchValue = 'about'): Promise<any> {
    const typeURI = type ? `&type=${type}` : ``;
    return this.http
      .get<any[]>(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}` + typeURI
      )
      .toPromise();
  }
  getById(id): Promise<any> {
    return this.http
      .get<any[]>(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .toPromise();
  }
}
