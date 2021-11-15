import { Routes, RouterModule, Router, NavigationStart, NavigationEnd,ActivatedRoute }  from '@angular/router';
import { NgModule }                                       from '@angular/core';


const appRoute2: Routes = [

  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
  ];


@NgModule({
  imports: [RouterModule.forRoot(appRoute2)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
