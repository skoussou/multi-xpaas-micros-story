import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProcessInstance } from '../models';
import { KieContainersService } from '../services';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.css']
})
export class ProcessDetailComponent implements OnInit {
  //@Input() 
  processInstances: Array<ProcessInstance>;
  
  constructor(
        private route: ActivatedRoute,
        private kieContainerService: KieContainersService,
        private location: Location
  ) {}

  ngOnInit(): void{
    //this.getProcessInstanceDetail();
  }

  getProcesses(): void {
    this.kieContainerService.getProcesses()
    .subscribe(processInstances => {this.processInstances = processInstances, console.log(JSON.stringify(processInstances)) });


  }
  

}
