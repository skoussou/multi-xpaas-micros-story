/**
 * An object containing properties for a sortable field, used to select categories of sorting
 */
export class SortField {
    /**
     * A unique Id for the sort field
     */
    id?: string;
  
    /**
     * The title to display for the sort field
     */
    title?: string;
  
    /**
     * The sort field type (e.g., 'alpha' or 'numeric' )
     */
    sortType: string;

    /**
     * The sort field type (e.g., 'alpha' or 'numeric' )
     */
    sortField?: string;
  }



  /**
 * An object containing properties for sort events
 */
export class SortEvent {
    /**
     * The currently selected filterable field
     */
    field: SortField;
  
    /**
     * True if sort is ascending
     */
    isAscending: boolean;
  }

  /**
 * A config containing properties for sort
 */
export class SortConfig {
    /**
     * A flag indicating the component is disabled
     */
    disabled?: boolean;
  
    /**
     * A list of sortable fields
     */
    fields: SortField[];
  
    /**
     * True if sort is ascending
     */
    isAscending?: boolean;
  
    /**
     * True if sort should be shown
     */
    visible?: boolean;
  }


