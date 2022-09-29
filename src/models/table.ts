export interface ITableColumn {
   title: string;
   dataIndex: string;
   key: string;
   render?: any;
}

export interface ITableData {
   key: number;
   name: string;
   [key: string]: any;
}
