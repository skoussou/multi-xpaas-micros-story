import { Component, OnInit } from '@angular/core';
import { KieContainersService } from '../services';

@Component({
  selector: 'app-process-definition-detail',
  templateUrl: './process-definition-detail.component.html',
  styleUrls: ['./process-definition-detail.component.css']
})
export class ProcessDefinitionDetailComponent implements OnInit {

    processDefinitionDetail : string = '';
    
    processDefinitionImage : string;

    constructor(private kieContainerService: KieContainersService) { }

    ngOnInit() {
        // this.getProcessDefinitionDetail();
    
    }


}
