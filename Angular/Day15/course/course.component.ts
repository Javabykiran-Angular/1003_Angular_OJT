import { Component, OnInit } from '@angular/core';
import { CourseService } from '../utility/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CourseService]
})
export class CourseComponent implements OnInit {
  myCourse:string[]=[];
  constructor(private service:CourseService) { 
    // let service=new CourseService();
    //this.myCourse=service.getCourse();
  }

  ngOnInit(): void {
    this.myCourse=this.service.getCourse();
  }

}
