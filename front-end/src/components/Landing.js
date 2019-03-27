import React, { Component } from 'react'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            user:[],
            shop: [],
            shopName: ""
        }
        this.getData = this.getData.bind(this)
        this.searchShop = this.searchShop.bind(this)
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
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME</h1>

                        <input type="text"
                            className="form-control"
                            name="Search"
                            placeholder="Search..."
                            value={this.state.query}
                            onChange={this.searchShop}
                            />
                        <Suggestions results = {this.state.shop} />
                        
                       {/*{items}*/} 
                    </div>
                </div>
            </div>
        )
    }
}

const Suggestions = (props) => {
  const data = props  
  const options = props.results.map((r) => (
    <li key={r.shopId}>
     <p>Shop name: {r.name}</p>
     <p>Location: {r.location}</p> 
     <p> Average Pricing: {r.avgPrice} </p>
     <p> Menu: {r.menu}</p>
    </li>
  ))
  return <ul>{options}</ul>
}

export default Landing
