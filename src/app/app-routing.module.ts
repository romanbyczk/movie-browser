import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PosterComponent } from './poster/poster.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: PosterComponent },
  { path: 'series', component: PosterComponent },
  { path: 'detailfilm/:id', component: DetailComponent },
  { path: 'detailserie/:id', component: DetailComponent },
  { path: 'search/:find', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
