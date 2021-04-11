import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { COURSESComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    COURSESComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:COURSESComponent},
      {path:'details',component:CourseDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
