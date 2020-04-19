import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Loading from "./Loading";
import { getAllCountries } from "../../Main/modules/auth";
import "./AllCountriesArray.css";

const searchingFor = search => {
  return x => {
    return x.name.toLowerCase().includes(search.toLowerCase()) || !search;
  };
};

class AllCountriesArray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      records: "",
      isloading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleLoadingState = isloading => {
    this.setState({ isloading: isloading });
  };

  UNSAFE_componentWillMount() {
    this.handleLoadingState(true);
    setTimeout(() => {
      this.handleLoadingState(false);
      this.props.getAllCountries();
    }, 2000);
  }

  handleSearch = async e => {
    await this.setState({ search: e.target.value });
  };

  render() {
    const { allCountries } = this.props;
    const { search, isloading } = this.state;
    const listCountries = allCountries.map((country, index) => {
      return (
        <div className="col s12 m6">
          <div className="card alignCard" key={`${country.name}-${index}`}>
            <div className="card-image ">
              <img className="imgheight" src={country.flag} alt="flag images" />
            </div>
            <div className="card-content">
              <ul>
                <strong className="nSize">{country.name}</strong>
                <li>{`Capital: ${country.capital}`}</li>
                <li>{`Region: ${country.region}`}</li>
                <li>{`Population: ${country.population}`}</li>
                <li>{`Calling Code: ${country.callingCodes}`}</li>
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

    const SearchArray = this.props.allCountries
      .filter(searchingFor(search))
      .map((country, index) => {
        return (
          
          <div className="col s12 m6">
            <div className="card alignCard" key={`${country.name}-${index}`}>
              <div className="card-image ">
                <img
                  className="imgheight"
                  src={country.flag}
                  alt="flag images"
                />
              </div>
              <div className="card-content">
                <ul>
                  <strong className="nSize">{country.name}</strong>
                  <li>{`Capital: ${country.capital}`}</li>
                  <li>{`Region: ${country.region}`}</li>
                  <li>{`Population: ${country.population}`}</li>
                  <li>{`Calling Code: ${country.callingCodes}`}</li>
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
      <div className="conatiner">
      <h5 className="grey-text text-darken-3 center">ALL COUNTRIES</h5>
        <form className="center" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search country"
            value={search}
            onChange={this.handleSearch}
            id="search"
          />
        </form>

        {search.length === 0 ? (
          <div>
            <div className="container center">
              {isloading && <Loading message="Loading ..." />}
            </div>
            <div className="row marg">{!isloading && listCountries}</div>
          </div>
        ) : (
          <div className="row marg">{SearchArray}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allCountries: state.auth.allCountries || []
});
const mapActionCreators = {
  getAllCountries
};
export default connect(
  mapStateToProps,
  mapActionCreators
)(withRouter(AllCountriesArray));
