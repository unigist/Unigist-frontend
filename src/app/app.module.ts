import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { BloggerComponent } from './components/blogger/blogger.component';
import { SigninComponent } from './components/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PostUpdateComponent } from './components/post-update/post-update.component';
import { BlogPostViewComponent } from './components/blog-post-view/blog-post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    BloggerComponent,
    SigninComponent,
    PageNotFoundComponent,
    PostUpdateComponent,
    BlogPostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
