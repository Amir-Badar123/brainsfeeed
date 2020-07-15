import React, { Component } from "react";
import "./Mainpage.css";
// import LearnMore from "./Learn.js";

class Mainpage extends Component {
  
  render() {
    let { CompData } = this.props;
    return CompData.map((ele) => {
      return (
        <div>
        <div className="divone container">
          <div className="col-md-mx npm run ">
            <div className="col-md-8" >
              <div className="card">
                <div style={{ marginTop: "10px" }}>
                  <span>Company Name</span>:
                  <p style={{ display: "inline-block" }}>{ele.company_name}</p>
                  <img src={ele.logo} alt="company-name" />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span> Title</span>:
                  <p>{ele.title_}</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>

                    Short Description
                  </span>:
                  <p>{ele.Short_description}</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span> Specialities One</span>:<brk></brk>
                  <p>{ele.specialties[1]}</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span> Specialities Two</span>:
                  <p>{ele.specialties[2]}</p>
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          </div>
          </div>
      );
    });
  }
}

export default Mainpage;
