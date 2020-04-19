import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getByCountry } from "../../Main/modules/auth";
import "./SearchByName.css";

class SearchByName extends Component {
  state = {
    country: "",
    isloading: false
  };

  UNSAFE_componentWillMount() {
    this.handleLoadingState(false);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      country: this.state.country
    };

    this.props.getByCountry(userData);
    this.handleLoadingState(true);
  };

  handleLoadingState = isloading => {
    this.setState({ isloading: isloading });
  };

  render() {
    const { country, isloading } = this.state;
    console.log(isloading);
    const { countryName } = this.props;
    const searchResult =
      countryName.status !== 404 &&
      countryName.map((country, index) => {
        return (
          <div className="col s8 m4">
            <div className="card alignCard" key={`${country.name}-${index}`}>
              <div className="card-image ">
                <img
                  className="imgheight"
                  src={country.flag}
                  alt="flag images"
                />
              </div>
              <div className="card-content center">
                <ul>
                  <strong className="nSize">{country.name}</strong>
                  <li key={country.capital}>{`Capital: ${country.capital}`}</li>
                  <li key={country.region}>{`Region: ${country.region}`}</li>
                  <li
                    key={country.population}
                  >{`Population: ${country.population}`}</li>
                  <li
                    key={country.callingCodes}
                  >{`Calling Code: ${country.callingCodes}`}</li>
                </ul>
                <ul>
                  {country.currencies.map((currency, index) => {
                    return <li key={index}>{`Currency: ${currency.name}`}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      });

    return (
      <div className="container">
        <h5 className="grey-text text-darken-3 center">SEARCH COUNTRY BY NAME</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={country}
            placeholder="Search country"
            onChange={this.handleChange}
            error={countryName.message}
            id="country"
          />
          <span className="red-text">{countryName.message}</span>
        </form>

        {isloading && searchResult}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countryName: state.auth.country || []
});
const mapActionCreators = {
  getByCountry
};
export default connect(
  mapStateToProps,
  mapActionCreators
)(withRouter(SearchByName));
