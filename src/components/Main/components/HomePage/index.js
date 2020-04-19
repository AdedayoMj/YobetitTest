import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import img1 from "../../../../assets/Flag1.jpeg";
import img2 from "../../../../assets/Flag2.jpeg";
import img4 from "../../../../assets/slotM.jpeg";

export default class index extends Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col s8 m4 Merg">
            <div className="card  ">
              <div className="card-image">
                <img src={img1} alt="images of flags" />
              </div>
              <div className="card-content">
                <p>
                  <strong>SEARCH BY NAME</strong>
                </p>
                <p>Simple search form that select countries by country name.</p>
              </div>
              <div className="card-action">
                <Link to="/search">Enter</Link>
              </div>
            </div>
          </div>

          <div className="col s8 m4 Merg">
            <div className="card ">
              <div className="card-image">
                <img src={img2} alt="images of flags" />
              </div>
              <div className="card-content">
                <p>
                  <strong>ALL COUNTRIES</strong>
                </p>
                <p>
                  A simple function that return all list of countries in the array
                </p>
              </div>
              <div className="card-action">
                <Link to="/all-countries">Enter</Link>
              </div>
            </div>
          </div>

          <div className="col s8 m4 Merg">
            <div className="card ">
              <div className="card-image">
                <img src={img4} alt="images of slot machines" />
              </div>
              <div className="card-content">
                <p>
                  <strong>SLOT MACHINE</strong>
                </p>
                <p>A simple slot machine that spins and return results</p>
              </div>
              <div className="card-action">
              <Link to="/slot">Enter</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
