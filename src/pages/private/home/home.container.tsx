import React, {useCallback, useEffect, useState} from "react";
import _debounce from "lodash/debounce";

import styles from "./index.module.scss";
import _get from "lodash/get";

import {useAppDispatch, useAppSelector} from "@my-store/hooks";
import {postsActions, selectPostsValue} from "@my-store/posts";
import {Table, TextInput} from "@components";

const fakeDataSource = [
   {
      key: 1,
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
   },
   {
      key: 2,
      name: "John",
      age: 42,
      address: "10 Downing Street",
   },
   {
      key: 3,
      name: "John",
      age: 42,
      address: "10 Downing Street",
   },
];

const fakeColumns = [
   {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
   },
   {
      title: "Age",
      dataIndex: "age",
      key: "age",
   },
   {
      title: "Address",
      dataIndex: "address",
      key: "address",
   },
];

const Home = () => {
   const dispatch = useAppDispatch();
   const post = useAppSelector(selectPostsValue);

   const [search, setSearch] = useState<string>("");

   useEffect(() => {
      dispatch(postsActions.search({q: search}));
   }, [search]);

   const handleChangeInput = useCallback(
      _debounce((e: any) => {
         const value = e.target.value;
         setSearch(value);
      }, 300),
      [],
   );

   const handleRowSelection = useCallback((value: number[]) => {
      console.log("WinLog 🐳🐳🐳 ~ value", value);
   }, []);

   return (
      <div className={styles["root"]}>
         <div className={styles["filter"]}>
            <div className={styles["input-wrapper"]}>
               <TextInput onChange={handleChangeInput} />
            </div>
            <div>{JSON.stringify(post)}</div>
            <Table column={fakeColumns} data={fakeDataSource} handleRowSelection={handleRowSelection} />
         </div>
      </div>
   );
};

export default Home;
