import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { cloneDeep, defaults, isEqual } from 'lodash';

import { PaginationConfig, PaginationEvent } from './../../models/pagination';


/**
 * Component for rendering pagination
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pfng-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements DoCheck, OnInit {
  /**
   * The Pagination config contaning component properties
   */
  @Input() config: PaginationConfig;

  /**
   * The Event is emitted when Page Size is changed
   */
  @Output('onPageSizeChange') onPageSizeChange = new EventEmitter();

  /**
   * The Event is emitted when Page Number is Changed
   */
  @Output('onPageNumberChange') onPageNumberChange = new EventEmitter();

  private defaultConfig = {
    pageNumber: 1,
    pageSizeIncrements: [5, 10, 20, 40, 80, 100],
    pageSize: 5
  } as PaginationConfig;
  private _pageNumber: number;
  private prevConfig: PaginationConfig;
  private _lastPageNumber: number;

  /**
   * The default constructor
   */
  constructor() {}

  // Initialization

  /**
   * Setup component configuration upon initialization
   */
  ngOnInit(): void {
    this.setupConfig();
    this.lastPageNumber = this.getLastPageNumber();
  }

  /**
   * Check if the component config has changed
   */
  ngDoCheck(): void {
    // Do a deep compare on config
    if (!isEqual(this.config, this.prevConfig)) {
      this.setupConfig();
    }
  }

  /**
   * Setup default config
   */
  protected setupConfig(): void {
    if (this.config !== undefined) {
      defaults(this.config, this.defaultConfig);
    } else {
      this.config = cloneDeep(this.defaultConfig);
    }
    this.lastPageNumber = this.getLastPageNumber();
    this.pageNumber = this.config.pageNumber;
    this.prevConfig = cloneDeep(this.config);
  }

  // Accessors

  get pageNumber(): number {
    return (this.config.totalItems !== undefined && this.config.totalItems > 0) ? this._pageNumber : 0;
  }

  set pageNumber(pageNumber: number) {
    this._pageNumber = pageNumber;
  }

  /**
   * Return last page number
   */
  get lastPageNumber(): number {
    return (this.config.totalItems !== undefined && this.config.totalItems > 0) ? this._lastPageNumber : 0;
  }

  /**
   * Update Last page Number
   */
  set lastPageNumber(value: number) {
    this._lastPageNumber = value;
  }

  // Actions

  /**
   * Jump to First Page
   */
  gotoFirstPage(): void {
    if (this.config.pageNumber !== 1) {
      this.updatePageNumber(1);
    }
  }

  /**
   * Go to Previous Page
   */
  gotoPreviousPage(): void {
    if (this.config.pageNumber !== 1) {
      this.updatePageNumber(this.config.pageNumber - 1);
    }
  }

  /**
   * Go to Next Page
   */
  gotoNextPage(): void {
    if (this.config.pageNumber < this.lastPageNumber) {
      this.updatePageNumber(this.config.pageNumber + 1);
    }
  }

  /**
   * Jump to Last Page
   */
  gotoLastPage(): void {
    if (this.config.pageNumber < this.lastPageNumber) {
      this.updatePageNumber(this.lastPageNumber);
    }
  }

  /**
   * Return start index and end index of current page
   */
  getCurrentPage() {
    return this.getStartIndex() + ' - ' + this.getEndIndex();
  }

  /**
   * Start Index of Current Page
   */
  protected getStartIndex(): number {
    return (this.config.totalItems !== undefined && this.config.totalItems > 0)
      ? this.config.pageSize * (this.config.pageNumber - 1) + 1 : 0;
  }

  /**
   * End Index of Current Page
   */
  protected getEndIndex(): number {
    let numFullPages = Math.floor(this.config.totalItems / this.config.pageSize);
    let numItemsOnLastPage = this.config.totalItems - (numFullPages * this.config.pageSize) || this.config.pageSize;
    let numItemsOnPage = this.isLastPage() ? numItemsOnLastPage : this.config.pageSize;
    return (this.config.totalItems !== undefined && this.config.totalItems > 0)
      ? (this.getStartIndex() + numItemsOnPage - 1) : 0;
  }

  /**
   * Page number is changed via input field's focus event
   */
  onPageNumberBlur($event: FocusEvent) {
    let newPageNumber: number = parseInt(String(this.pageNumber), 10);
    if (isNaN(newPageNumber)) {
      newPageNumber = this.pageNumber = this.config.pageNumber;
    }

    if (newPageNumber > this.lastPageNumber) {
      this.updatePageNumber(this.lastPageNumber);
    } else if (newPageNumber < 1) {
      this.updatePageNumber(1);
    } else {
      this.updatePageNumber(newPageNumber);
    }
  }

  /**
   * Page number is changed via input field's keyboard event
   */
  onPageNumberKeyup($event: KeyboardEvent): void {
    let keycode = $event.keyCode ? $event.keyCode : $event.which;
    if (keycode === 13) {
      this.onPageNumberBlur(null);
    }
  }

  // Private

  /**
   * Page size is changed
   * @param newPageSize new page size
   */
  private onPageSizeUpdate($event: Event, newPageSize: number): void {
    this.config.pageSize = newPageSize;
    this.lastPageNumber = this.getLastPageNumber();
    this.gotoFirstPage();
    this.onPageSizeChange.emit({
      pageSize: newPageSize
    } as PaginationEvent);
  }

  /**
   * Update the Page Number
   * @param newPageNumber new page number
   */
  private updatePageNumber(newPageNumber: number): void {
    this.config.pageNumber = this.pageNumber = newPageNumber;
    this.onPageNumberChange.emit({
      pageNumber: newPageNumber
    } as PaginationEvent);
  }

  /**
   * Get Last Page Number
   */
  private getLastPageNumber(): number {
    return Math.ceil(this.config.totalItems / this.config.pageSize);
  }

  /**
   * Check if current Page is Last Page
   */
  private isLastPage(): boolean {
    return (this.config.pageNumber === this.lastPageNumber);
  }
}

