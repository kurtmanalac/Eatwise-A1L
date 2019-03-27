import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            display_name: '',
            email: ''
        }
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
                </div>
            </div>
        )
    }
}

export default Profile