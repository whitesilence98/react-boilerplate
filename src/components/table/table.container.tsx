import React, {ChangeEvent, memo, useEffect, useState} from "react";
import classNames from "classnames";
import _cloneDeep from "lodash/cloneDeep";

import styles from "./table.module.scss";

import {ITableColumn, ITableData} from "@models/table";

interface ITableComponentProps {
   data: ITableData[];
   column: ITableColumn[];
   actionProps?: any;
   rowSelectionProps?: any;
   handleRowSelection?: (value: number[]) => void;
   loading?: boolean;
}

interface ITableComponentState {
   selectedRows: number[];
   isSelectedAll: boolean;
}

const TableContainer = memo(({data, column, actionProps, loading = false, handleRowSelection}: ITableComponentProps) => {
   const [state, setState] = useState<ITableComponentState>({selectedRows: [], isSelectedAll: false});
   const handleSelectRow = (value: number) => (event: ChangeEvent<HTMLInputElement>) => {
      if (state.selectedRows.includes(value)) {
         const index = state.selectedRows.indexOf(value);
         const selectedClone = JSON.parse(JSON.stringify(state.selectedRows));
         selectedClone.splice(index, 1);
         setState(prevState => ({...prevState, selectedRows: selectedClone}));
         return;
      }
      setState(prevState => ({...prevState, selectedRows: [...prevState.selectedRows, value]}));
   };

   useEffect(() => {
      if (handleRowSelection && state.selectedRows) {
         handleRowSelection(state.selectedRows);
      }
   }, [state.selectedRows]);

   const handleSelectAllRow = () => {
      const selectableData: ITableData[] = _cloneDeep(data).filter(data => data.key % 2 !== 0);
      setState(prevState => ({
         ...prevState,
         isSelectedAll: !prevState.isSelectedAll,
         selectedRows: state.isSelectedAll ? [] : selectableData.map(i => i.key),
      }));
   };

   return (
      <div className={styles["root"]}>
         <div className={classNames(styles["row"], styles["row--top-40"])}>
            <h2 className={styles["row__title"]}>Data ({data.length})</h2>
         </div>
         <div className={classNames(styles["row"], styles["row--top-20"])}>
            <div className={styles["table-container"]}>
               {loading && <div className={styles["loading-overlay"]}>Reload</div>}
               <table className={styles["table"]}>
                  <thead className={styles["table__thead"]}>
                     <tr>
                        <th className={classNames(styles["table__th"], styles["checkbox-wrapper"])}>
                           <input
                              type="checkbox"
                              className={styles["table__select-row"]}
                              onChange={handleSelectAllRow}
                              checked={state.isSelectedAll}
                           />
                        </th>
                        {column.map((column, index) => (
                           <th key={index.toString()} className={styles["table__th"]}>
                              {column.title}
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className={styles["table__tbody"]}>
                     {data.map((tableData, index) => {
                        const isChecked = state.selectedRows.includes(tableData.key);
                        return (
                           <tr
                              key={index.toString()}
                              className={classNames(styles["table-row"], {
                                 [styles["table-row--red"]]: tableData.key,
                              })}>
                              <td className={classNames(styles["table-row__td"], styles["checkbox-wrapper"])}>
                                 <div className={styles["table-row--overdue"]}></div>
                                 <input
                                    type="checkbox"
                                    className={styles["table__select-row"]}
                                    onChange={handleSelectRow(tableData.key)}
                                    checked={isChecked}
                                 />
                              </td>
                              {column.map((column, index) => (
                                 <td key={index.toString()} data-column="name" className={styles["table-row__td"]}>
                                    {column.render || column.key}
                                 </td>
                              ))}
                              {/* <td data-column="age" className={styles["table-row__td"]}>
                              <p className={classNames(styles["table-row__status"], styles["status--green"], styles["status"])}>Active</p>
                           </td>
                           <td data-column="address" className={styles["table-row__td"]}>
                              <p className={classNames(styles["table-row__status"], styles["status--blue"], styles["status"])}>On Track</p>
                           </td> */}
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
});

export {TableContainer as Table};

//  <td className={styles["table-row__td"]}>
//     <svg
//        version="1.1"
//        className="table-row__edit"
//        xmlns="http://www.w3.org/2000/svg"
//        xmlnsXlink="http://www.w3.org/1999/xlink"
//        x="0px"
//        y="0px"
//        viewBox="0 0 512.001 512.001"
//        // style={{enableBackground: "new 0 0 512.001 512.001"}}
//        xmlSpace="preserve"
//        data-toggle="tooltip"
//        data-placement="bottom"
//        // title="Edit"
//     >
//        <g>
//           {" "}
//           <g>
//              {" "}
//              <path
//                 d="M496.063,62.299l-46.396-46.4c-21.2-21.199-55.69-21.198-76.888,0l-18.16,18.161l123.284,123.294l18.16-18.161    C517.311,117.944,517.314,83.55,496.063,62.299z"
//                 style={{fill: "rgb(1, 185, 209)"}}
//              />{" "}
//           </g>
//        </g>
//        <g>
//           {" "}
//           <g>
//              <path
//                 d="M22.012,376.747L0.251,494.268c-0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512-21.763L22.012,376.747z"
//                 style={{fill: "rgb(1, 185, 209)"}}
//              />{" "}
//           </g>
//        </g>
//        <g>
//           {" "}
//           <g>
//              {" "}
//              <polygon points="333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   " style={{fill: "rgb(1, 185, 209)"}} />{" "}
//           </g>
//        </g>
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//     </svg>
//     <svg
//        data-toggle="tooltip"
//        data-placement="bottom"
//        // title="Delete"
//        version="1.1"
//        className="table-row__bin"
//        xmlns="http://www.w3.org/2000/svg"
//        xmlnsXlink="http://www.w3.org/1999/xlink"
//        x="0px"
//        y="0px"
//        viewBox="0 0 512 512"
//        // style={{enableBackground: "new 0 0 512 512"}}
//        xmlSpace="preserve">
//        <g>
//           {" "}
//           <g>
//              {" "}
//              <path
//                 d="M436,60h-90V45c0-24.813-20.187-45-45-45h-90c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693-17.594,44.815-40.926c0.004-0.043,0.008-0.086,0.011-0.129L449.817,150H466c8.284,0,15-6.716,15-15v-30    C481,80.187,460.813,60,436,60z M196,45c0-8.271,6.729-15,15-15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c-0.729,7.753-7.142,13.592-14.934,13.592H133.396c-7.792,0-14.204-5.839-14.934-13.592L92.284,150h327.432L393.537,468.408z     M451,120h-15H76H61v-15c0-8.271,6.729-15,15-15h105h150h105c8.271,0,15,6.729,15,15V120z"
//                 style={{fill: "rgb(158, 171, 180)"}}
//              />{" "}
//           </g>
//        </g>
//        <g>
//           {" "}
//           <g>
//              {" "}
//              <path
//                 d="M256,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z"
//                 style={{fill: "rgb(158, 171, 180)"}}
//              />{" "}
//           </g>
//        </g>
//        <g>
//           {" "}
//           <g>
//              {" "}
//              <path
//                 d="M346,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C361,186.716,354.284,180,346,180z"
//                 style={{fill: "rgb(158, 171, 180)"}}
//              />{" "}
//           </g>
//        </g>
//        <g>
//           {" "}
//           <g>
//              {" "}
//              <path
//                 d="M166,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C181,186.716,174.284,180,166,180z"
//                 style={{fill: "rgb(158, 171, 180)"}}
//              />{" "}
//           </g>
//        </g>
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//        <g />
//     </svg>
//  </td>;
