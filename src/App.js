// import React, { Component } from 'react'

// class App extends Component {
//   render() {
//     return (
//       <>
//         Home Page
//       </>
//     )
//   }
// }

// export default App


import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css';





class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: []
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


  componentDidMount() {
    axios.get("https://api.covid19api.com/summary")
      .then(res => {
        const data = res.data;
        this.setState({
          data: data,
          loading: false
        });
      })
  }


  render() {
    console.log(this.state.data);
    if (this.state.loading) {
      return <p>Loading Data</p>
    }



    return (
      <>
        {/* <div>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div> */}
        <div className="main">
        <ul>
          <li>Global Confrimed</li>
          <li>{this.state.data.Global.TotalConfirmed}</li>
          {/* <li>{this.state.data.Countries[1].Country}</li> */}

          {this.state.data.Countries.map((region, index) => {
            return <li key={region.Country}>{region.Country}:  || Total Cases: {region.TotalConfirmed} || Total Deaths: {region.TotalDeaths}  || Total Recovered: {region.TotalRecovered}</li>
          })}
        </ul>

        </div>


      </>
    )
  }
}

export default App