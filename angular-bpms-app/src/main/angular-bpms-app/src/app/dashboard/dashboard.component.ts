import { Component, OnInit } from '@angular/core';
import { KieContainer } from '../models/kie-container';
import { KieContainersService } from '../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  kieContainers: KieContainer[];

  constructor(private kieContainersService: KieContainersService) { }

  ngOnInit() {
    this.getKieContainers();
  }

  getKieContainers(): void {
    this.kieContainersService.getKieContainers()
      .subscribe(kieContainers => this.kieContainers = kieContainers);
  }
}
