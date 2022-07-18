import React from "react";
import Chart from "./Chart";

function Briefbar(props) {
  const comp = props.pdata.reportdata.ActiveReport;
  const incomp = props.pdata.reportdata.InActiveReports;
  const paid = props.pdata.billData.PaidBills;
  const unpaid = props.pdata.billData.UnpaidBills;
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col mx-2 my-3">
            <div
              class={`card text-bg-danger mb-3`}
              style={{ maxWidth: "18rem", textAlign: "center" }}
            >
              <div class="card-header">
                <h5>
                  <i class="fa-solid fa-headset mx-3"></i>Complaints
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <h5 style={{ fontSize: "55px" }}>{comp}</h5>
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-2 my-3">
            <div
              class={`card text-bg-success mb-3`}
              style={{ maxWidth: "18rem", textAlign: "center" }}
            >
              <div class="card-header">
                <h5>
                  <i class="fa-solid fa-list-check mx-3"></i>Reviewed Reports
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <h5 style={{ fontSize: "55px" }}>{incomp}</h5>
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-2 my-3">
            <div
              class={`card text-bg-secondary mb-3`}
              style={{ maxWidth: "18rem", textAlign: "center" }}
            >
              <div class="card-header">
                <h5>
                  <i class="fa-solid fa-coins mx-3"></i>Pending Bills
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <h5 style={{ fontSize: "55px" }}>{unpaid}</h5>
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-2 my-3">
            <div
              class={`card text-bg-success mb-3`}
              style={{ maxWidth: "18rem", textAlign: "center" }}
            >
              <div class="card-header">
                <h5>
                  <i class="fa-solid fa-sack-dollar mx-3"></i>Paid Bills
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <h5 style={{ fontSize: "55px" }}>{paid}</h5>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>My Bill Tracker</h2>
          <br />
          <Chart cdata={props.pdata.chartData}/>
        </div>
      </div>
    </>
  );
}

export default Briefbar;
