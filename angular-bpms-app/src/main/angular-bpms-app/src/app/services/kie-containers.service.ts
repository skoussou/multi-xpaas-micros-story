import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { KieContainer, KieContainerCreate } from './../models/kie-container';
import {
  HeaderOptions,
  ProcessDefinitions,
  ProcessInstance
} from './../models';

import {
  MessageService
} from './../services/message.service';

import {
  SettingsService
} from './../services/settings.service';

@Injectable()
export class KieContainersService {

  // private httpOptions:HeaderOptions;

  // private kieServerUrl = 'api/kieContainers';  // URL to web api
  // private  kieServerUrl:string ;  // URL to web api

  containerId = 'test-project-1.4';
  processId = 'TestProject.simple1';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private settings: SettingsService
  ) { }

  private getHeader(): HeaderOptions {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.settings.getAuth()
      }),
      withCredentials: false
    };
  }

  private getUrl(): string {
    return this.settings.getHost() + '/kie-server/services/rest/server';
  }

  /** GET kie containers from the server */
  checkConnection(host: string, username: string, pw: string): Observable<Array<KieContainer>> {
    const _url = `${host}/kie-server/services/rest/server`;
    const _header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic ' + btoa(`${username}:${pw}`)
      }),
      withCredentials: false
    };

    return this.http.get<any>(_url, _header)
      .pipe(
        tap(res => console.log(`check connection call. `, res))
      );
  }

  /** GET kie containers from the server */
  getKieContainers(): Observable<Array<KieContainer>> {
    return this.http.get<any>(this.getUrl() + '/containers', this.getHeader())
      .pipe(
        map(kieContainers => {
          if (kieContainers
            && kieContainers.result
            && kieContainers.result['kie-containers']
            && kieContainers.result['kie-containers']['kie-container']) {
            return kieContainers.result['kie-containers']['kie-container'];
          } else {
            return [];
          }
        }),
        catchError(this.handleError('getKieContainers', []))
      );
  }

  createContainer(body: KieContainerCreate): Observable<KieContainer> {
    return this.http.put<any>(this.getUrl() + '/containers/' + body['container-id'], body, this.getHeader())
      .pipe(
        map(container => {
          if (container
            && container.result
            && container.result['kie-container']) {
            return container.result['kie-container'];
          } else {
            return null;
          }
        }),
        catchError(this.handleError('getProcesses', { error: true }))
      );
  }

  deleteKieContainer(containerID: string): Observable<KieContainer> {
    console.log('DELETE ', this.getUrl() + '/containers/' + containerID);

    return this.http.delete<any>(this.getUrl() + '/containers/' + containerID, this.getHeader())
      .pipe(
        tap(res => console.log(`deleted container. `, res)),
        catchError(this.handleError('getProcesses', { error: true }))
      );
  }

  getProcesses(): Observable<Array<ProcessInstance>> {
    return this.http.get<Array<ProcessInstance>>(this.getUrl() + '/queries/processes/instances', this.getHeader())
      .pipe(
        map(processInstances => {
          if (processInstances
            && processInstances['process-instance']) {
            return processInstances['process-instance'];
          } else {
            return [];
          }
        }),
        tap(processInstances => this.log(`fetched kie processes.`)),
        catchError(this.handleError('getProcesses', []))
      );
  }

  /** GET ProcessInstance by id. Will 404 if id not found */
  getProcessInstance(): Observable<ProcessInstance> {
    const url = `${this.getUrl()}/containers/${this.containerId}/instances/${this.processId}`;

    return this.http.get<ProcessInstance>(url, this.getHeader()).pipe(
      tap(_ => this.log(`fetched process instance id=1`)),
      catchError(this.handleError<ProcessInstance>(`getProcessInstance id=1`))
    );
  }

  /** GET ProcessDefinitions. Will 404 if id not found */
  getProcessDefinitions(): Observable<ProcessDefinitions> {
    const url = `${this.getUrl()}/queries/processes/definitions`;

    return this.http.get<ProcessDefinitions>(url, this.getHeader())
      .pipe(
        tap(_ => this.log(`fetched process definitions. `)),
        catchError(this.handleError<ProcessDefinitions>(`getProcessDefinitions`))
      );
  }

  /** GET ProcessDefinitions. Will 404 if id not found */
  getProcessDefinitionDetail(cid, pid): Observable<string> {
    const url = `${this.getUrl()}/containers/${cid}/processes/definitions/${pid}`;

    return this.http.get<string>(url, this.getHeader())
      .pipe(
        tap(_ => this.log(`fetched process definition detail. `)),
        catchError(this.handleError<string>(`getProcessDefinitionDetail`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a KieContainersService message with the MessageService */
  private log(message: string): void {
    this.messageService.add('KieContainerService: ' + message);
  }
}
