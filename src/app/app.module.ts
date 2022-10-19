import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CounterComponent } from './counter/counter.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ConditionalStatementComponent } from './conditional-statement/conditional-statement.component';










@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
    CounterComponent,
    PropertyBindingComponent,
    ConditionalStatementComponent,
    
  

   
   
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
