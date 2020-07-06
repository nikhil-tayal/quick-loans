import React from 'react'

const dashboardColumns = [
  {
    Header: "Application Number",
    accessor: "applicationNumber",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Mobile",
    accessor: "mobile",
  },
  {
    Header: "Amount / EMI / Tenure",
    Cell: ({ original }) => {
      let { mobileAmount, emi, tenure } = original;
      return <div>{`${mobileAmount} / ${emi} / ${tenure}`}</div>;
    },
  },
];

export { dashboardColumns };
