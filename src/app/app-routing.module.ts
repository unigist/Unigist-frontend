import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggerComponent } from './components/blogger/blogger.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path:  '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component:BlogViewComponent},
  {path: 'blogger', component:BloggerComponent},
  {path: 'signin', component:SigninComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
