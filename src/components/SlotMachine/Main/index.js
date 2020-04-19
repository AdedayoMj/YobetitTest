import React, { Component } from "react";
import { Button } from "../Button";

import Wheel from "../Wheel/Wheel";
import "./Spinner.css";

export default class SlotMachine extends Component {
  render() {
    const { win, Coins, wheel, spin, display } = this.props;

    return (
     
      <div >
      <div className="row ">
          {wheel.map((wheel, id) => (
            <Wheel key={id} image={wheel} />
          ))}
        </div>
        <div className=" row">
          <div className="col s10 m6">
            <div className="texts">
              Coins: <span className="coin">{Coins}</span>
            </div>
            <div className="textResult">{win}</div>
          </div>
          <div className="col s8 m4 btnSpin">
          {!display ? null :
            <Button onClick={() => spin()}></Button>
          }
            
          </div>
        </div>
      </div>
        

        

    );
  }
}
