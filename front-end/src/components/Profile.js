import React, {Component } from 'react'
import {Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import SearchShop from './SearchShop'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            display_name: '',
            email: '',
            shop: [],
            shopName: ""
        }

        this.searchShop = this.searchShop.bind(this)

    }

    componentDidMount () {
        var token = localStorage.usertoken
        console.log(token)
        var decoded = jwt_decode(token)
        console.log("decoded token")
        this.setState({
            username: decoded.username,
            display_name: decoded.display_name,
            email: decoded.email
        })
    }
    searchShop(e){

      const query = e.target.value;

      fetch('http://localhost:3000/home/search-shop/?name='+query)
            .then((response) => { return response.json() })
            .then((result) => {
                console.log(result)
                this.setState({shop: result})
            })
            .catch((e) => { console.log(e)});
    }

    render () {
        return (
            <div>
                <div>
                    <div>
                        <h1>PROFILE</h1>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td>{this.state.username}</td>
                            </tr>
                            <tr>
                                <td>Display Name</td>
                                <td>{this.state.display_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <SearchShop/>


                </div>
            </div>
        )
    }
}

export default Profile