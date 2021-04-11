import { Course } from './../Model/course.model';
import { Component, OnInit,Input } from '@angular/core';
 
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course:Course;
  constructor() { }

  ngOnInit(): void {
  }

}
