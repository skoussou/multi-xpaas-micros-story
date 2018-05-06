/**
 * A config containing properties for Pagination
 */
export class PaginationConfig {
    /**
     * The current page number
     */
    pageNumber?: number;
  
    /**
     * The total number of items in the data set.
     */
    totalItems?: number;
  
    /**
     * Page size increments for the 'per page' dropdown
     */
    pageSizeIncrements?: Array<number>;
  
    /**
     * The initial page size to use
     */
    pageSize?: number;
  }

  /**
 * An object containing properties for pagination events
 */
export class PaginationEvent {
    /**
     * The current page number
     */
    pageNumber?: number;
  
    /**
     * The initial page size to use
     */
    pageSize?: number;
  }