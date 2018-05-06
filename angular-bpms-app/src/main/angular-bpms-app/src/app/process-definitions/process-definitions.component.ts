import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProcessDefinitions } from '../models';
import { KieContainersService } from '../services';
import { SortConfig, SortField, SortEvent } from '../models/sort';
import { PaginationConfig, PaginationEvent } from './../models/pagination';
import { CONSTANTS } from "./../constants";
import { Observable } from "rxjs/Observable";
import { FilterArrayPipe } from '../pipes'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalProcessDetailsComponent } from '../components';
import { ActivatedRoute } from '@angular/router';
import * as _ from "lodash"

@Component({
  selector: 'app-process-definitions',
  templateUrl: './process-definitions.component.html',
  styleUrls: ['./process-definitions.component.css']
})
export class ProcessDefinitionsComponent implements OnInit {
  private sortConfig: SortConfig;
  private currentSortField: SortField;
  private isAscendingSort: boolean = true;
  private currentFilterField: SortField;
  public filters: any = [];
  private polling: any;
  private paginationConfig: PaginationConfig;
  private actionsText: String = '';
  private processDefinitions: Array<any>;
  private filteredProcessDefinitions: Array<any>;
  private getDataIn: any;

  constructor(
    private filterArrayPipe: FilterArrayPipe,
    private kieContainerService: KieContainersService,
    private modal: NgbModal,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {




    // {
    //     "processes": [
    //         {
    //             "process-id": "checklist.CheckListProcess",
    //             "process-name": "CheckListProcess",
    //             "process-version": "1.0",
    //             "package": "org.jbpm",
    //             "container-id": "questionare"
    //         }
    //     ]
    // }

    this.sortConfig = {
      fields: [{
        id: 'processID',
        title: 'Process ID',
        sortType: 'alpha',
        sortField: 'process-id'
      }, {
        id: 'processName',
        title: 'Process Name',
        sortType: 'alpha',
        sortField: 'process-name'
      }, {
        id: 'processVersion',
        title: 'Process Version',
        sortType: 'alpha',
        sortField: 'process-version'
      }, {
        id: 'package',
        title: 'Package',
        sortType: 'alpha',
        sortField: 'package'
      }, {
        id: 'container',
        title: 'Container',
        sortType: 'alpha',
        sortField: 'container-id'
      }],
      isAscending: this.isAscendingSort
    } as SortConfig;

    this.currentSortField = this.sortConfig.fields[0]; // init sort order
    this.currentFilterField = this.sortConfig.fields[0];

    this.getDataIn = this.route.params.subscribe(params => {
      // if navigation from containers pag, set initial filter from route params
      if(params.container){
        let filter = {
          filterType: _.find(this.sortConfig.fields,['id', 'container']),
          text: params.container
        }
        this.filters.push(filter)
      }
      this.getProcessDefinitions();
  });


}

ngOnDestroy() {
  console.log('stop process definitions polling')
  this.pollingUnsubscribe()
  this.getDataIn.unsubscribe();
}

getProcessDefinitions(): void {
  let polling = Observable.timer(0, CONSTANTS.POLLING_INTERVAL);
  //unsubscribe first in case we're already polling
  this.pollingUnsubscribe();

  this.polling = polling.subscribe(
    (t) => {
      console.log("start process definitions poll ", t)
      this.kieContainerService.getProcessDefinitions()
        .subscribe(processDefinitions => {

          if (processDefinitions) {
            // console.log(kieContainers);
            //flatten version/group/artifact
            this.processDefinitions = processDefinitions ? processDefinitions.processes : [];
            // console.log('JSON String Returned: ', JSON.stringify(processDefinitions))
            this.updateUI();
          }
        }, (err) => {
          this.pollingUnsubscribe();
          console.log('oh no, get container fail');
          // this.handleError("appViewSettingAlertTitle",
          //   "appViewGetAppointmentsErr");
        })
    },
    err => console.error("error from kieContainerService.getProcessDefinitions ", err),
    () => console.log("polling complete ")
  ), (err) => {
  this.pollingUnsubscribe();
  console.log('oh no, get getProcessDefinitions polling fail');
  // this.handleError("appViewSettingAlertTitle",
  //   "appViewGetAppointmentsErr");
}

  }

pollingUnsubscribe() {
  if (this.polling) {
    this.polling.unsubscribe();
  }
}

handlePageSize($event: PaginationEvent) {
  this.actionsText = 'Page Size: ' + $event.pageSize + ' Selected' + '\n' + this.actionsText;
}


sortChange($event: SortEvent): void {
  this.currentSortField = $event.field;
  this.isAscendingSort = $event.isAscending;
}

filterChange($event: any): void {
  console.log("Filter Change ", $event);
  this.currentFilterField = $event.currentFilterField;
  this.filters = _.clone($event.filters);
  this.updateUI();
}

updateUI() {
  this.doFilter();
  // this.doPagination();
}

clearFilters() {
  this.filters = [];
  this.updateUI();
}

clearFilter(filter) {
  _.remove(this.filters, filter);
  this.filters = _.clone(this.filters);
  this.updateUI();
}

doPagination() {
  if (this.paginationConfig) {
    this.paginationConfig.totalItems = this.filteredProcessDefinitions ? this.filteredProcessDefinitions.length : 0;
  } else {
    this.paginationConfig = {
      pageSize: 10,
      pageNumber: 1,
      totalItems: this.filteredProcessDefinitions ? this.filteredProcessDefinitions.length : 0
    } as PaginationConfig;
  }
}

doFilter() {
  this.filteredProcessDefinitions = this.filterArrayPipe.transform(this.processDefinitions, this.filters);
  this.doPagination();
}


viewProcessDetails(processDef) {
  console.log("PROCESS ", JSON.stringify(processDef));
  const pid = processDef['process-id'];
  const cid = processDef['container-id'];
  this.kieContainerService.getProcessDefinitionDetail(cid, pid)
    .subscribe(processDef => {

      console.log('IMAGE String Returned: ', JSON.stringify(processDef))
      this.openProcessDetailsModal(processDef)

    });
}

openProcessDetailsModal(processDef) {

  let modalRef = this.modal.open(ModalProcessDetailsComponent, { windowClass: 'process-details' })
  modalRef.componentInstance.definition = processDef;

  modalRef.result
    .then((result) => {
      console.log('success from modal ', result)
      // this.getKieContainers()
    }, (reason) => {
      console.log('modal dismissed ', reason)
      // this.getKieContainers()
    });
}

}
