import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyVideo from "../Videos/v.webm";

class Videos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card mt-4 bg-info bg-opacity-75">
          <div className="card-title">
            <p></p>
            <p className="mx-4 my-4 mb-0 text-center fs-3 fw-bold">REDE AMAI</p>

            <p className="mx-4 my-4 mb-0 text-center fs-3 fw-bold">
              MOMENTOS DE DESCONTRAÇÃO
            </p>
        
        
            <div class="d-flex align-content p-3">
            <div class="d-flex align-content-around flex-wrap">
              <video width="50%" height="50%" controls>
                <source src={MyVideo} type="video/webm" />
              </video>


            <div class="d-flex align-content-around flex-wrap"></div>
              <video width="50%" height="50%" controls>
                <source src={MyVideo} type="video/webm" />
              </video>
            </div>
            </div>
            <div class="d-flex align-content p-3">
            <div class="d-flex align-content-around flex-wrap">
              <video width="50%" height="50%" controls>
                <source src={MyVideo} type="video/webm" />
              </video>


            <div class="d-flex align-content-around flex-wrap"></div>
              <video width="50%" height="50%" controls>
                <source src={MyVideo} type="video/webm" />
              </video>
            </div>
            </div>

            </div>
          </div>
        </div>
      
    );
  }
}

export default Videos;
