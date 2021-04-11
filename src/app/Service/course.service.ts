import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { COURSES } from '../courses-data';
import { Course } from '../Model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses():Observable<Course[]>{
    return of (COURSES);
  }

  constructor() { }
  
}
