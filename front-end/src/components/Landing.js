import React, { Component } from 'react';
import logo from './../logo.png';
import dropdownMenu from './../dropdown.png';
import './../App.css';
import { Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'
import SearchShop from './SearchShop'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            user:[],
            shop: [],
            shopName: ""
        }
        this.getData = this.getData.bind(this)
    }

    componentDidMount(){
        this.getData()
    }


     getData() {
        fetch('http://localhost:3000/home/view-users/')
            .then((response) => { return response.json() })
            .then((result) => {
                console.log(result)
                this.setState({user: result})
            })
            .catch((e) => { console.log(e)});
    }


    render(){
      {/*

        const data = this.state.user
        const items = data.map((i) => <li key = {i.userId}>
        Username: {i.username}
        Admin Access: {i.adminAccess}
        Display Name: {i.displayName}
      </li>)
      */}
        return (
      <div className="App">
        <header className="App-header">
          <div className="clogo">
            <img src={logo} className="logopic" /> 
          </div>
          {/*=================Search bar & results =================*/}
            <SearchShop/>
          {/*=========================================================*/}
          </header>
        </div>
    );      

        
    }
}

export default Landing
