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
@Pipe({ name: 'processStatus' })
export class ProcessStatusPipe implements PipeTransform {
  /**
   * Sort array by property
   *
   * @param {string} Property name to sort by
   * @returns {any} Returns sorted array
   */
  transform(status: string): string {
    let _status = status.toString();
    switch (_status) {
      case "0":
        _status = "Pending";
        break;
      case "1":
        _status = "Acitve";
        break;
      case "2":
        _status = "Complete";
        break;
      case "3":
        _status = "Aborted";
        break;
      case "4":
        _status = "Suspended";
        break;

      default:
        break;
    }
    return _status
  }
}


// public static final int 	STATE_ABORTED 	3
// public static final int 	STATE_ACTIVE 	1
// public static final int 	STATE_COMPLETED 	2
// public static final int 	STATE_PENDING 	0
// public static final int 	STATE_SUSPENDED 	4