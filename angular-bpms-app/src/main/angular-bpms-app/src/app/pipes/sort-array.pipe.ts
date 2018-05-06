import { Pipe, PipeTransform } from '@angular/core';

import { orderBy } from 'lodash';

/**
 * Sort array pipe
 *
 * This is currently used with the pin feature of the list component
 *
 * Example:
 * <div *ngFor="let item of (items | sortPin: 'name': true)">
 */
@Pipe({ name: 'sortArray'})
export class SortArrayPipe implements PipeTransform {
  /**
   * Sort array by property
   *
   * @param {Array<any>} arr Array to sort
   * @param prop Property name to sort by
   * @param {boolean} descending True to sort descending
   * @returns {any} Returns sorted array
   */
  transform(arr: Array<any>, prop: any, ascending: boolean ): any {
    if (arr === undefined) {
      return arr;
    }
    const sortOrder = ascending ? 'asc' : 'desc';
    const sortedArray = orderBy(arr, [prop.toLowerCase()], [sortOrder]);
    return sortedArray;
  }
}