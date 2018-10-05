import React, { Component } from 'react';
import './css/main.css';
import axios from 'axios';
import Header from './components/HeaderComponent';
import Table from './components/TableComponent';
import Create from './components/CreateComponent';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: {},
      drivers: {}
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const drivers = await axios.get("http://localhost:8000/api/drivers.php");
    const data = await axios.get("http://localhost:8000/api/deliveries.php")
        .catch(error => {
            console.log(error);
        });

    this.setState({
        data: data.data,
        drivers: drivers.data
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <hr/>
        <Table value={this.state}/>
        <hr />
        <hr />
        <Create />
        
      </div>
    );
  }
}

export default App;
