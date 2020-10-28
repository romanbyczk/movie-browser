import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  search;
  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit(f) {
    location.reload();
    this.router.navigate(['search/' + f.value.search]).then(() => {
      window.location.reload();
    });
  }

  ngOnInit() {}
}
