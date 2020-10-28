import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  search;
  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit(f) {
    location.reload();
    this.router.navigate(['search/' + f.value.search]).then(() => {
      window.location.reload();
    });
  }

  ngOnInit() {}
}
