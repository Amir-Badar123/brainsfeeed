import React, { Component } from "react";
import "./Mainpage.css";
import LearnMore from "./Learn.js";

class Mainpage extends Component {
  state = {
    showModalFlag: false,
  };
  showModalFlag = () => {
    this.setState({
      showModalFlag: true,
    });
  };

  hideModalFlag = () => {
    this.setState({
      showModalFlag: false,
    });
  };
  render() {
    let { CompData } = this.props;
    return CompData.map((ele) => {
      return (
        <div className="divone container">
          <div className="col-md-12">
            <div className="col-md-4">
              <div className="card">
                <div style={{ marginTop: "10px" }}>
                  <button>Company Name</button> :{" "}
                  <p style={{ display: "inline-block" }}>{ele.company_name}</p>
                  <img src={ele.logo} alt="company-name" />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button> Title</button>
                  <p>{ele.title_}</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button className="btn btn-secondary">
                    {" "}
                    Short Description
                  </button>
                  <p>{ele.Short_description}</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button> Specialities One</button>
                  <p>{ele.specialties[1]}</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button> Specialitiesw Two</button>
                  <p>{ele.specialties[2]}</p>
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <button className="btn btn-primary">
                  Learn More
                  <LearnMore> Learn More</LearnMore>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Mainpage;
