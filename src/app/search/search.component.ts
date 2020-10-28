import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue;
  data;

  constructor(private route: ActivatedRoute, private omdbService: OmdbService) {
    this.route.params.subscribe((params) => (this.searchValue = params.find));
  }
  ngOnInit() {
    this.getData(this.searchValue);
  }

  getData(searchValue) {
    this.omdbService.search(undefined, searchValue).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  onSucces(data) {
    this.data = data.Search;
  }
  onError(err) {
    console.log(err);
  }
}
