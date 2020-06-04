import React, { Component } from "react";

import InputNumber from "elements/Form/InputNumber";
// import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const InputDate = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputDate data={InputDate} />
          </div>
        </div>
      </div>
    );
  }
}
