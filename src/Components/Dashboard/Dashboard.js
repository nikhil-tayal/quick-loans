import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import { dashboardColumns } from "../../Configs/dashboard.config";
import fire from "../../Configs/firebase.config";
import Header from "../Header/Header";
export default function Dashboard(props) {
  const [tableData, setTableData] = useState("");
  useEffect(() => {
    fire
      .database()
      .ref("message")
      .limitToFirst(10)
      .on("value", (snapShot) => {
        let tableData = Object.keys(snapShot.val())?.map((firebaseKey) => {
          return { ...snapShot.val()[firebaseKey], firebaseKey };
        });
        setTableData(tableData);
      });
  }, []);
  const newApplicationHandler = ()=>{
    props.history.push("/loan-details")
  }
  return (
    <div className="dashboard__wrapper">
      <div className="container">
        <Header {...props}/>
        <button className="button__generic my-3 py-2 px-5" onClick={newApplicationHandler}> + Add New Application</button>
        <ReactTable data={tableData || []} columns={dashboardColumns} showPagination={false} minRows={0} />
      </div>
    </div>
  );
}
