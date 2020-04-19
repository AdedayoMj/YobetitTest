import React, { Component } from "react";
import SlotMachine from "../Main/index";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Sound from "../Sound";
import { getWheelData } from "../../Main/modules/auth";

import "../Main/Spinner.css";

class Spinner extends Component {
  state = {
    spinning: false,
    winSound: false,
    fail: false,
    initial: 20,
    userCoins: 0,
    win: "",
    wheel: [],
    onStop: false,
    display:true
  };
  componentDidMount() {
    this.props.getWheelData();
    setTimeout(() => {
      this.setState({
        wheel: [this.s1(), this.s2(), this.s3()]
      });
    }, 1000);
  }

  s1 = () =>
    this.props.wheelData.Reel1[
      Math.floor(Math.random() * this.props.wheelData.Reel1.length)
    ];
  s2 = () =>
    this.props.wheelData.Reel2[
      Math.floor(Math.random() * this.props.wheelData.Reel2.length)
    ];
  s3 = () =>
    this.props.wheelData.Reel3[
      Math.floor(Math.random() * this.props.wheelData.Reel3.length)
    ];

  newSpin = () => {
    this.setState({
      wheel: [this.s1(), this.s2(), this.s3()]
    });
  };

  coinCondition = () => {
    const { wheel, initial } = this.state;
    const decrement = initial;
    if (
      wheel[0].match("cherry") &&
      wheel[1].match("cherry") &&
      wheel[2].match("cherry")
    ) {
      this.setState({
        initial: decrement + 50,
        win: "You won 50 Coins"
      });
      setTimeout(() => {
        this.setState({
          winSound: false
        });
      }, 3000);
    } else if (
      wheel[0] === "apple" &&
      wheel[1] === "apple" &&
      wheel[2] === "apple"
    ) {
      this.setState({
        winSound: true,
        initial: decrement + 20,
        win: "You won 20 Coins"
      });
      setTimeout(() => {
        this.setState({
          winSound: false
        });
      }, 3000);
    } else if (
      wheel[0] === "banana" &&
      wheel[1] === "banana" &&
      wheel[2] === "banana"
    ) {
      this.setState({
        winSound: true,
        initial: decrement + 15,
        win: "You won 15 Coins"
      });
      setTimeout(() => {
        this.setState({
          winSound: false
        });
      }, 3000);
    } else if (
      wheel[0] === "lemon" &&
      wheel[1] === "lemon" &&
      wheel[2] === "lemon"
    ) {
      this.setState({
        winSound: true,
        initial: decrement + 3,
        win: "You won 3 Coins"
      });
      setTimeout(() => {
        this.setState({
          winSound: false
        });
      }, 3000);
    } else if (
      (wheel[0] === "cherry" && wheel[1] === "cherry") ||
      (wheel[1] === "cherry" && wheel[2] === "cherry") ||
      (wheel[0] === "cherry" && wheel[2] === "cherry")
    ) {
      this.setState({
        winSound: true,
        initial: decrement + 40,
        win: "You won 40 Coins"
      });
      setTimeout(() => {
        this.setState({
          winSound: false
        });
      }, 3000);
    } else if (
      (wheel[0] === "apple" && wheel[1] === "apple") ||
      (wheel[1] === "apple" && wheel[2] === "apple") ||
      (wheel[0] === "apple" && wheel[2] === "apple")
    ) {
      this.setState({
        winSound: true,
        initial: decrement + 10,
        win: "You won 10 Coins"
      });
      setTimeout(() => {
        this.setState({
          winSound: false
        });
      }, 3000);
    } else if (
      (wheel[0] === "banana" && wheel[1] === "banana") ||
      (wheel[1] === "banana" && wheel[2] === "banana") ||
      (wheel[0] === "banana" && wheel[2] === "banana")
    ) {
      this.setState({
        winSound: true,
        initial: decrement + 5,
        win: "You won 5 Coins"
      });
      setTimeout(() => {
        this.setState({
          winSound: false
        });
      }, 3000);
    } else {
      this.setState({
        fail: true,
        initial: decrement,
        win: "Oops try again"
      });
      setTimeout(() => {
        this.setState({
          fail: false
        });
      }, 3000);
    }
  };

  startSpinning = () => {
    this.intervalID = setInterval(this.newSpin, 100);
  };

  stopSpinning = () => {
    clearInterval(this.intervalID);
    this.coinCondition();
    this.setState({
      spinning: false,
      display:true
    });
  };

  spin = () => {
    var coins = this.state.initial;
    var decrement = --coins;
    if (coins > 0) {
      this.setState({
        spinning: true,
        onStop: true,
        display:false,
        initial: decrement
      });

      this.startSpinning();
      setTimeout(() => {
        this.stopSpinning();
      }, 6000);
    } else if (coins === 0) {
      this.setState({
        initial: 0
      });
      alert("you have no coins left");
    }
  };

  render() {
    const { winSound, fail, initial, 
            win, wheel, spinning, display } = this.state;

    return (
      <div classname ="conatiner ">
      <div className='center'>
      <h5 className="grey-text text-darken-3 ">
          SLOT MACHINE
        </h5>
      </div>
        
        <div className="spinner">
          <SlotMachine
            winSound={winSound}
            fail={fail}
            spin={this.spin}
            Coins={initial}
            win={win}
            wheel={wheel}
            display={display}
          />
        </div>
        {winSound === true && <Sound audio="win" />}
        {fail === true && <Sound audio="fail" />}
        {spinning === true && <Sound audio="wheelSound" />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  wheelData: state.auth.wheelData
});
const mapActionCreators = {
  getWheelData
};

export default connect(mapStateToProps, mapActionCreators)(withRouter(Spinner));
