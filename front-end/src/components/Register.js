import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            display_name: '',
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            display_name: this.state.display_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div>
                <div>
                    <div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1>Please sign in</h1>
                            <div>
                                <label>Username:</label>
                                <input type="text"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.onChange} />
                            </div>
                            <div>
                                <label>Display Name: </label>
                                <input type="text"
                                    name="display_name"
                                    placeholder="Enter Display Name"
                                    value={this.state.display_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" >Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register