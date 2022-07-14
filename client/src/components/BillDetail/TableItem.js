import React from "react";

function TableItem(props) {
  let data = null;
  if (props.data !== null) data = props.data;
  return (
    <>
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.BillGenDate}</td>
          <td>&#8377; {data.Amount}</td>
          <td>{data.Paid===true?<i className="fa-solid fa-circle-check" data-toggle="tooltip" data-placement="top" title="Paid"></i>:<i className="fa-solid fa-triangle-exclamation" data-toggle="tooltip" data-placement="top" title="Unpaid"></i>}</td>
          <td>
          <i className="fa-solid fa-eye mx-2" data-toggle="tooltip" data-placement="top" title="View"></i>
          {!data.Paid?<i className="fa-solid fa-file-invoice-dollar mx-2" data-toggle="tooltip" data-placement="top" title="Payment"></i>:""}
          <i className="fa-solid fa-download mx-2" data-toggle="tooltip" data-placement="top" title="Download Bill"></i>
          <i className="fa-solid fa-plug-circle-exclamation mx-2" data-toggle="tooltip" data-placement="top" title="Report Bill"></i>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TableItem;
