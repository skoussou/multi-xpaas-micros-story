import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { SortConfig, SortField } from '../../models/sort';

/**
 * Sort component
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'custom-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  /**
   * The sort config containing component properties
   */
  @Input() config: SortConfig;
  @Input() filters: any;

  /**
   * The event emitted when the sort has changed
   */
  @Output('onChange') onChange = new EventEmitter();

  private currentFilterField: SortField;
  private filterText: string;

  constructor() {
  }

  /**
   * Setup component configuration upon initialization
   */
  ngOnInit(): void {
    this.currentFilterField = this.config.fields[0];
  }

  selectFilter(idx: number) {
    this.currentFilterField = this.config.fields[idx];
  }

  setFilter(): void {
    if (this.filterText && this.filterText.length >= 1) {
      const filter = {
        filterType: this.currentFilterField,
        text: this.filterText
      };
      this.filters.push(filter);
      this.filterText = '';
    }

    this.onChange.emit({
      currentFilterField: this.currentFilterField,
      filters: this.filters
    });
  }

}
