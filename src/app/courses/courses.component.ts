import { Component, OnInit } from '@angular/core';
import { Course } from '../Model/course.model';
import { COURSES } from '../courses-data';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class COURSESComponent implements OnInit {
  allcourses = COURSES;
  selectedCourse:Course;

  constructor() { }

  ngOnInit(): void {

  }
  onSelect(course:Course):void{
    this.selectedCourse = course

    

  }
  

}
