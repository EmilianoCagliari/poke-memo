import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { CardTableComponent } from './components/card-table/card-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent},
  { path: 'game', component: CardTableComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch:'full', redirectTo:'' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
