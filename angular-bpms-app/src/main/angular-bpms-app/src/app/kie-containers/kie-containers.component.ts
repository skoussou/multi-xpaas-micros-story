import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { KieContainer } from '../models/kie-container';
import { KieContainersService } from '../services';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component'
import { SortConfig, SortField, SortEvent } from '../models/sort';
import { Observable } from "rxjs/Observable";
import { PaginationConfig, PaginationEvent } from './../models/pagination';
import { CONSTANTS } from "./../constants";
import { FilterArrayPipe } from '../pipes'
import { Router } from '@angular/router';
import * as _ from "lodash"


@Component({
  selector: 'app-kie-containers',
  templateUrl: './kie-containers.component.html',
  styleUrls: ['./kie-containers.component.css'],
})
export class KieContainersComponent implements OnInit {
  kieContainers: Array<any>;
  kieContainersFiltered: Array<any>;
  runningContainers: number = 0;
  failedContainers: number = 0;
  showFilterDD: boolean = false;
  showSortDD: boolean = false;
  currentFilterField: SortField;
  sortType: string = 'Name';
  filters: any = [];
  filterText: string;
  sortOrder: string = "ASC";

  isAscendingSort: boolean = true;
  sortConfig: SortConfig;
  currentSortField: SortField;
  fieldName: string;

  paginationConfig: PaginationConfig;
  actionsText: String = '';

  polling: any;

  constructor(
    private kieContainerService: KieContainersService,
    private modal: NgbModal,
    private filterArrayPipe: FilterArrayPipe,
    private router: Router
  ) { }

  ngOnInit() {

    this.sortConfig = {
      fields: [{
        id: 'name',
        title: 'Name',
        sortType: 'alpha',
        sortField: 'container-id'
      }, {
        id: 'group',
        title: 'Group',
        sortType: 'alpha',
        sortField: 'group-id'
      }, {
        id: 'artifact',
        title: 'Artifact',
        sortType: 'alpha',
        sortField: 'artifact-id'
      }, {
        id: 'version',
        title: 'Version',
        sortType: 'alpha',
        sortField: 'version'
      }],
      isAscending: this.isAscendingSort
    } as SortConfig;
    this.currentSortField = this.sortConfig.fields[0]; // init sort order
    this.currentFilterField = this.sortConfig.fields[0];

    this.getKieContainers();
  }

  ngOnDestroy() {
    console.log('stop container polling')
    this.pollingUnsubscribe()
  }

  doPagination() {
    if (this.paginationConfig) {
      this.paginationConfig.totalItems = this.kieContainersFiltered ? this.kieContainersFiltered.length : 0;
    } else {
      this.paginationConfig = {
        pageSize: 10,
        pageNumber: 1,
        totalItems: this.kieContainersFiltered ? this.kieContainersFiltered.length : 0
      } as PaginationConfig;
    }
  }


  doFilter() {
    this.kieContainersFiltered = this.filterArrayPipe.transform(this.kieContainers, this.filters);
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


  getKieContainers(): void {

    let polling = Observable.timer(0, CONSTANTS.POLLING_INTERVAL);
    //unsubscribe first in case we're already polling
    this.pollingUnsubscribe();

    this.polling = polling.subscribe(
      (t) => {
        console.log("start containers poll ", t)
        this.kieContainerService.getKieContainers()
          .subscribe(kieContainers => {
            console.log(new Date() + ' Got Containers ', kieContainers.length)
            if (kieContainers) {
              // console.log(kieContainers);
              //flatten version/group/artifact
              this.kieContainers = _.map(kieContainers, ((c) => {
                return _.omit(_.extend(c, c['release-id']), ['release-id']);
              }));
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

  pollingUnsubscribe() {
    if (this.polling) {
      this.polling.unsubscribe();
    }
  }


  updateSummaries() {
    this.runningContainers = _.filter(this.kieContainers, ["status", "STARTED"]).length
    this.failedContainers = _.filter(this.kieContainers, ["status", "FAILED"]).length
  }

  openCreateModal() {
    this.modal.open(ModalContainerComponent).result
      .then((result) => {
        console.log('success from modal ', result)
        this.getKieContainers()
      }, (reason) => {
        console.log('modal dismissed ', reason)
        this.getKieContainers()
      });
  }

  setStatusFilter(status) {
    let _filters = _.clone(this.filters)

    _.remove(_filters, ((f: any) => {
      return f.filterType.sortField === 'status';
    }));

    if (status !== 'TOTAL') {
      let filter = {
        filterType: {
          sortField: 'status',
          title: 'Status',
        },
        text: status
      }
      _filters.push(filter)
    }
    this.filters = _filters;
    this.updateUI();
  }

  filterChange($event: any): void {
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

  updateUI() {
    this.doFilter();
    this.doPagination();
  }


  deleteContainer(container) {

    const modalRef = this.modal.open(ModalContainerComponent);
    modalRef.componentInstance.deleteContainer = 'true';
    modalRef.componentInstance.containerName = container["container-id"];

    modalRef.result
      .then((result) => {
        console.log('success from modal ', result)
        this.doDelete(container["container-id"]);
      }, (reason) => {
        console.log('modal dismissed ', reason)
      });
  }

  doDelete(containerID) {
    this.kieContainerService.deleteKieContainer(containerID)
      .subscribe(res => {
        console.log(new Date() + ' Got Containers ', res)

        this.getKieContainers();

      }, (err) => {
        // this.pollingUnsubscribe();
        console.log('oh no, delete container fail');
      })
  }

  gotoDefs(containerID){
    this.router.navigate(['./processDefinitions', {container: containerID}])
  }

  gotoProcesses(containerID){
    this.router.navigate(['./processes', {container: containerID}])
  } 

}
