import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ tableData }) {
  return (
    <div className="table">
      {tableData.map(({ country, cases, countryInfo }) => (
        <tr key={countryInfo.id}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
