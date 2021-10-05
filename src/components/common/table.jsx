import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

//interface:-
//data
//columns: array
//onSort func
//sortColumn func

const Table = ({ data, onSort, sortColumn, columns }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
