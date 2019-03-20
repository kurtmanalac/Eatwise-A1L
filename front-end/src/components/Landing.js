import React, { Component } from 'react'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            user:[]
        }   
        this.getData = this.getData.bind(this)
    }
    
    

    componentDidMount(){
        this.getData()
    }


     getData() {
        fetch('http://localhost:3000/view-users/')
            .then((response) => { return response.json() })
            .then((result) => {
                console.log(result)
                this.setState({user: result})
            })
            .catch((e) => { console.log(e)});
    }

    render(){
      const data = this.state.user
      const items = data.map((i) => <li key = {i.userId}> 
        Username: {i.username}
        Admin Access: {i.adminAccess}
        Display Name: {i.displayName}
      </li>)
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME</h1>
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing