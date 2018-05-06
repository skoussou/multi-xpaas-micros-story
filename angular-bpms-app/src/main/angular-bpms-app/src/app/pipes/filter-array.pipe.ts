import { Pipe, PipeTransform } from '@angular/core';

import {  filter } from 'lodash';

/**
 * Filter array pipe
 *
 * This is currently used with the pin feature of the list component
 *
 * Example:
 * <div *ngFor="let item of (items | sortPin: 'name': true)">
 */
@Pipe({ name: 'filterArray' })
export class FilterArrayPipe implements PipeTransform {
  /**
   * Sort array by property
   *
   * @param {Array<any>} arr Array to filter
   * @param prop Property name to sort by
   * @param filterText descending True to sort descending
   * @returns {any} Returns sorted array
   */
  transform(arr: Array<any>, filters: any): any {
    
    if (arr === undefined || filters.length <= 0) {
      return arr;
    }

    for (let index = 0; index < filters.length; index++) {
      arr = filter(arr, ((c) => {
        return c[filters[index].filterType.sortField].toString().toLowerCase().indexOf(filters[index].text.toString().toLowerCase()) > -1;
      }))
    }

    return arr;
  }
}