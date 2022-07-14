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
          <td>{data.Amount}</td>
          <td>{data.Paid===true?<i class="fa-solid fa-circle-check"></i>:<i class="fa-solid fa-triangle-exclamation"></i>}</td>
          <td>I'm a list of actions</td>
        </tr>
      </tbody>
    </>
  );
}

export default TableItem;
