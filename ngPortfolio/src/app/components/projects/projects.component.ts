import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  p1: Project = new Project('Food Trucks Anonomus', 'http://54.177.221.5:8080/FoodTruckTracker/#/home', 'https://github.com/julianchae/FinalProject', '');
  p2: Project = new Project('Member Token Generator', 'http://54.177.221.5:8080/MemberToken/', 'https://github.com/julianchae/FinalProject', '');
  p3: Project = new Project('3D Print Tracker', 'http://54.177.221.5:8080/PrintTrackerREST/', 'https://github.com/julianchae/FinalProject', '');

  constructor() { }

  ngOnInit(): void {
  }

  projects: Project[] = [this.p1, this.p2, this.p3]

}
