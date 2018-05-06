import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ProcessInstance } from '../models';
import { KieContainersService } from '../services';
import { PaginationConfig, PaginationEvent } from './../models/pagination';
import { FilterArrayPipe } from '../pipes';
import { SortConfig, SortField, SortEvent } from '../models/sort';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CONSTANTS } from "./../constants";
import { ModalProcessDetailsComponent } from '../components';
import { ActivatedRoute } from '@angular/router';
import * as _ from "lodash"

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})

export class ProcessesComponent implements OnInit {
  private processInstances: any;
  private filteredProcessInstances: any;
  private polling: any;
  private paginationConfig: PaginationConfig;
  private sortType: string = 'Name';
  private filters: any = [];
  private filterText: string;
  private sortOrder: string = "ASC";
  private actionsText: String = '';
  private isAscendingSort: boolean = true;
  private sortConfig: SortConfig;
  private currentSortField: SortField;
  private currentFilterField: SortField;
  private fieldName: string;
  private summaryData: any;
  private getDataIn: any;

  constructor(
    private kieContainerService: KieContainersService,
    private modal: NgbModal,
    private filterArrayPipe: FilterArrayPipe,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sortConfig = {
      fields: [{
        id: 'initiator',
        title: 'Initiator',
        sortType: 'alpha',
        sortField: 'initiator'
      }, {
        id: 'processId',
        title: 'Process Id',
        sortType: 'alpha',
        sortField: 'process-instance-id'
      }, {
        id: 'name',
        title: 'Name',
        sortType: 'alpha',
        sortField: 'process-name'
      }, {
        id: 'version',
        title: 'Version',
        sortType: 'alpha',
        sortField: 'process-version'
      }, {
        id: 'state',
        title: 'State',
        sortType: 'alpha',
        sortField: 'process-instance-state'
      }, {
        id: 'description',
        title: 'Description',
        sortType: 'alpha',
        sortField: 'process-instance-desc'
      }, {
        id: 'container',
        title: 'Container',
        sortType: 'alpha',
        sortField: 'container-id'
      }, {
        id: 'startDate',
        title: 'Start Date',
        sortType: 'alpha',
        sortField: 'start-date'
      }, {
        id: 'parentId',
        title: 'Parent Id',
        sortType: 'alpha',
        sortField: 'parent-instance-id'
      }],
      isAscending: this.isAscendingSort
    } as SortConfig;
    this.currentSortField = this.sortConfig.fields[0]; // init sort order
    this.currentFilterField = this.sortConfig.fields[0];

    this.getDataIn = this.route.params.subscribe(params => {
      // if navigation from containers pag, set initial filter from route params
      if (params.container) {
        let filter = {
          filterType: _.find(this.sortConfig.fields, ['id', 'container']),
          text: params.container
        }
        this.filters.push(filter)
      }
      this.getProcesses();
    });

  }

  ngOnDestroy() {
    console.log('stop processes polling')
    this.pollingUnsubscribe();
    this.getDataIn.unsubscribe();
  }

  getProcesses(): void {
    let polling = Observable.timer(0, CONSTANTS.POLLING_INTERVAL);
    //unsubscribe first in case we're already polling
    this.pollingUnsubscribe();

    this.polling = polling.subscribe(
      (t) => {
        console.log("start processes poll ", t)
        this.kieContainerService.getProcesses()
          .subscribe(processInstances => {
            console.log(new Date() + ' Got Containers ', processInstances.length)
            if (processInstances) {
              this.processInstances = processInstances;
              this.updateUI();
              this.updateSummaries();
            }
          }, (err) => {
            // this.pollingUnsubscribe();
            console.log('oh no, get container fail');
            // this.handleError("appViewSettingAlertTitle",
            //   "appViewGetAppointmentsErr");
          })
      },
      err => console.error("error from getKieContainers ", err),
      () => console.log("polling complete ")
    ), (err) => {
      // this.pollingUnsubscribe();
      console.log('oh no, get container polling fail');
      // this.handleError("appViewSettingAlertTitle",
      //   "appViewGetAppointmentsErr");
    }
  }

  updateUI() {
    this.doFilter();
    this.doPagination();
  }

  updateSummaries() {
    let statusArr = ['Pending', 'Active', 'Compete', 'Aborted', 'Suspended']
    let iconArray = [
      'pficon-pending',
      'pficon-on-running',
      'pficon-ok',
      'pficon-error-circle-o',
      'pficon-paused'
    ]
    this.summaryData = [];
    for (let index = 0; index < statusArr.length; index++) {
      this.summaryData.push({
        id: index,
        icon: "pficon " + iconArray[index],
        name: statusArr[index],
        value: _.filter(this.processInstances, [['process-instance-state'], index]).length
      })
    }
  }

  pollingUnsubscribe() {
    if (this.polling) {
      this.polling.unsubscribe();
    }
  }

  doPagination() {
    if (this.paginationConfig) {
      this.paginationConfig.totalItems = this.filteredProcessInstances ? this.filteredProcessInstances.length : 0;
    } else {
      this.paginationConfig = {
        pageSize: 10,
        pageNumber: 1,
        totalItems: this.filteredProcessInstances ? this.filteredProcessInstances.length : 0
      } as PaginationConfig;
    }
  }


  doFilter() {
    this.filteredProcessInstances = this.filterArrayPipe.transform(this.processInstances, this.filters);
  }

  handlePageSize($event: PaginationEvent) {
    this.actionsText = 'Page Size: ' + $event.pageSize + ' Selected' + '\n' + this.actionsText;
  }

  handlePageNumber($event: PaginationEvent) {
    this.actionsText = 'Page Number: ' + $event.pageNumber + ' Selected' + '\n' + this.actionsText;
  }

  sortChange($event: SortEvent): void {
    this.currentSortField = $event.field;
    this.isAscendingSort = $event.isAscending;
  }

  filterChange($event: any): void {
    console.log("BACk FROM FILTER ", $event)
    this.currentFilterField = $event.currentFilterField;
    this.filters = _.clone($event.filters);
    this.updateUI();
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

  selectSort(type) {
    this.sortType = type;
  }

  viewProcessDetails(processInstance) {
    console.log("PROCESS ", JSON.stringify(processInstance));
    this.openProcessDetailsModal(processInstance)
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

  setStatusFilter(item): void {
    const _filters = _.clone(this.filters);

    _.remove(_filters, ((f: any) => {
      return f.filterType.sortField === 'process-instance-state';
    }));

    const filter = {
      filterType: {
        sortField: 'process-instance-state',
        title: 'Status'
      },
      text: item.id,
      display: item.name
    };
    _filters.push(filter);

    this.filters = _filters;
    this.updateUI();
  }

}



