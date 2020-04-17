import React, { Component } from 'react';
import { connect } from 'react-redux'

import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css';
import Table from 'react-bootstrap/Table';
import { loadCovidData, addCountry } from "./actions/covidActions"
import SelectedCountries from './components/SelectedCountries'
import PropTypes from "prop-types";

// import { addCountry, RemoveCountry } from '../actions/action'

// import $ from 'jquery';

// //map
// import { setActiveOption } from './reducers/action-creators'
// import Map from './components/Map'
// import Toggle from './components/Toggle'
// import Legend from './components/Legend'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      selected: []

    }
  }

  // componentWillMount() {
  //   fetch('https://api.covid19api.com/summary')
  //     .then(results => results.json())
  //     .then(data => {

  //       this.setState({
  //         data: data,
  //         loading: false
  //       }
  //         // ,()=>console.log(this.state)
  //       )
  //     })
  // }

  // https://api.covid19api.com/summary

  // componentDidMount() {
  //   axios.get("summary.json")
  //     .then(res => {
  //       const data = res.data;
  //       //setting local state
  //       this.setState({
  //         data: data,
  //         loading: false,
  //         selected: []

  //       }, () => {

  //         this.props.loadCovidData(this.state.data.Countries)

  //       });
  //     })
  // }


  /* 
  

  - udpate covidActions to include axios request
  - create your box (dispatch) with the address (action type) contents of package (payload)
  - setup componentWillMount() to initialize function
  - declare loadCovidData in "Customs declaration form" (propTypes)
  - test/debug using Redux Devtools to confirm if action types are being dispatched

  componentWillMount() {
    this.props.loadCovidData()
  }
  
  */

 componentWillMount() {
  this.props.loadCovidData()
}




  render() {

    if (this.state.loading) {
      return <p>Loading Data</p>
    };

    // console.log("looking for data in state from app.js")
    // console.log(this.state.data)

    // console.log("===============app local state===============");
    // console.log(this.state.data.Countries[100].TotalConfirmed);
    // console.log(this.state.data.Countries);

    console.log("==============app props==============");
    console.log(this.props)
    console.log(this.props.data[100].TotalConfirmed);
    console.log(this.props.selected[0].Country);


    return (
      <>


        <div>
          <SelectedCountries />



          <Table id="scrollTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%" striped bordered hover size="sm" variant="dark" >
            <thead>
              <th class="th-sm">Region/Country</th>
              <th class="th-sm">Total Cases</th>
              <th class="th-sm">Total Death</th>
              <th class="th-sm">Total Recovery</th>
            </thead>

            <tbody>

              {/* <p>Test Here:{this.state.data.Countries[100].TotalConfirmed}</p>
              <p>Test Here:{this.props.data[100].TotalConfirmed}</p> */}

              {
                this.props.data.map((region, index) => {
                  return <tr key={region.Country}>
                    <td>{region.Country}</td>
                    <td>{region.TotalConfirmed}</td>
                    <td>{region.TotalDeaths}</td>
                    <td>{region.TotalRecovered}</td>
                    {/* <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td> */}
                    <td>
                      <button
                        onClick={() => {
                          this.props.addCountry(
                            //  this.state.data.Countries
                            // {
                            //   "Country": "China",
                            //   "CountryCode": "CN",
                            //   "Slug": "china",
                            //   "NewConfirmed": 50,
                            //   "TotalConfirmed": 83356,
                            //   "NewDeaths": 1,
                            //   "TotalDeaths": 3346,
                            //   "NewRecovered": 111,
                            //   "TotalRecovered": 78311,
                            //   "Date": "2020-04-16T14:09:46Z"
                            // }
                            region

                          )
                        }}
                      >Add to Compare</button></td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </div>
      </>
    )
  }
}


App.propTypes = {
  data: PropTypes.object.isRequired,
// declare what kind of thing loadCovidData is
  loadCovidData: PropTypes.func.isRequired
};

//get data from redux
let mapStateToProps = (state) => {

  console.log("print mapStateToProp");
  // console.log(state.dataReducer.data[1]);

  //this.state.dataReducer.selected

  /*
  this.state.dataReducer
  this: {
    state: {
      dataReducer: {
        selected: {

        }
      }
    }
  }

  */



  return {
    data: state.dataReducer.selected
  }
}

//passing data to redux
//this.props.loadCovidData
let mapDispatchToProps = (dispatch) => {

  return {
    // loadCovidData: (InitialCovidData) => dispatch(loadCovidData(InitialCovidData)),
    addCountry: (selectedCountry) => dispatch(addCountry(selectedCountry))


  }
}


export default connect(mapStateToProps,{loadCovidData})(App)

// connect(mapStateToProps, {loadCovidData})(App)