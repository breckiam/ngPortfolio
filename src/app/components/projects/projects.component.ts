import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],

})
export class ProjectsComponent implements OnInit {

  p1: Project = new Project('Food Trucks Anonymous', 'http://54.177.221.5:8080/FoodTruckTracker/#/home', 'https://github.com/julianchae/FinalProject', 'assets/Photos/truck.webp');
  p2: Project = new Project('Member Token Generator', 'http://54.177.221.5:8080/MemberToken/', 'https://github.com/acary/MidtermProject', 'assets/Photos/mbrToken.webp');
  p3: Project = new Project('3D Print Tracker', 'http://54.177.221.5:8080/PrintTrackerREST/', 'https://github.com/breckiam/EventTrackerProject', 'assets/Photos/gummy-printer.webp');

  constructor() { }

  ngOnInit(): void {
  }

  projects: Project[] = [this.p1, this.p2, this.p3]

}
