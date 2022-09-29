export interface PaginationParams {
   current?: number;
   page: number;
   total: number;
}

//List
export interface ListResponse<T> {
   data: T[];
   pagination?: PaginationParams;
   success?: boolean;
   error?: boolean;
}

//
export interface DataResponse<T> {
   data: T;
   success?: boolean;
   errors?: any;
}

export interface FilterParams {
   q?: string;
   // _limit?: number;
   // _sort?: string;
   // _order?: 'asc' | 'desc';
   [key: string]: any;
}

//Single
