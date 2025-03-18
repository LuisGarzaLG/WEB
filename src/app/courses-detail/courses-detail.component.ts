import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  course:string = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
        this.route.params.subscribe
    (params => this.course = params['course'])
  }

}
