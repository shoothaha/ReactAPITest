import React, { Component } from 'react';
import './css/main.css';
import axios from 'axios';
import Header from './components/HeaderComponent';
import Table from './components/TableComponent';
import Form from './components/FormComponent';
import Footer from './components/FooterComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deliveries: {},
            drivers: {},
            inputDisabled: false,
            newDeliveryButtonClicked: true,
            showComponent: false,
            chosenDeliveryId: 0
        }
        this.getData = this.getData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.newDeliveryButtonClicked = this.newDeliveryButtonClicked.bind(this);
        this.editButtonClicked = this.editButtonClicked.bind(this);
        this.removeRecord = this.removeRecord.bind(this);
    }

    //Use lifecycle to control the render timing
    componentDidMount() {
        this.getData();
    }

    // Fetch all data from APIs and set to state
    async getData() {
        const drivers = await axios.get("http://localhost:8000/api/drivers.php");
        const deliveries = await axios.get("http://localhost:8000/api/deliveries.php")
            .catch(error => {
                console.log(error);
            });

        this.setState({
            deliveries: deliveries.data,
            drivers: drivers.data
        });
    }

    //Handle form submit, will check how the Form been trigered, then submit different requests (POST/PUT)
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.showComponent && this.state.newDeliveryButtonClicked) {
            axios.post("http://localhost:8000/api/deliveries.php", {
                "date": e.target.elements.date.value,
                "name": e.target.elements.deliveryName.value,
                "driver_id": e.target.elements.selectDriver.value
            })
            .then (
                this.getData()
            )
            .catch(error => {
                console.log(error);
            })
        } else {
            let id = this.state.chosenDeliveryId;
            axios.put(`http://localhost:8000/api/deliveries.php?id=${id}`, {
                "driver_id": e.target.elements.selectDriver.value
            })
            .then (
                this.getData()
            )
            .catch(error => {
                console.log(error);
            })
        }
        this.setState({
            showComponent: false
        });
    }

    //Remove a record, been called in ButtonComponent, `id` was passed in param
    removeRecord (id) {
        if (window.confirm('Are you sure you want to remove this delivery?')) {
            axios.delete(`http://localhost:8000/api/deliveries.php?id=${id}`)           
                .then (
                    this.getData()
                )
                .catch(error => {
                    console.log(error);
                });
        }
       console.log(id);
    }

    //Set the states, the following means the FormComponent was trigered by Create New delivery
    newDeliveryButtonClicked () {
        this.setState ({
            inputDisabled: false,
            newDeliveryButtonClicked: true,
            showComponent: true
        })
    }

    //Set the states, the following means the FormComponent was trigered by Edit
    editButtonClicked (id) {
        this.setState ({
            inputDisabled: true,
            newDeliveryButtonClicked: false,
            showComponent: true,
            chosenDeliveryId: id
        })
    }

    render() {
        return (
            <div className="App">
                <Header onClick={this.newDeliveryButtonClicked}/>
                <hr />
                {
                this.state.showComponent &&
                <Form 
                    value={this.state} 
                    onSubmit={this.handleSubmit} 
                    inputDisabled={this.state.inputDisabled}
                />
                }
                {this.state.showComponent && <hr />}
                <Table value={this.state} onClick = {this.editButtonClicked} removeRecord = {this.removeRecord}/>
                <hr />
                <Footer />
            </div>
        );
    }
}

export default App;
