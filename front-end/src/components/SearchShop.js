import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class SearchShop extends Component {
  constructor(){
        super()
        this.state = {
            shop: []
        }
        this.searchShop = this.searchShop.bind(this)
  }

  searchShop(e){
    const query = e.target.value;

    fetch('http://localhost:3000/home/search-all-shops/?name='+query)
          .then((response) => { return response.json() })
          .then((result) => {
              console.log(result)
              this.setState({shop: result})
          })
          .catch((e) => { console.log(e)});

  }

    render () {
        {/*Function for returning all shops that match the searched word*/}
        const Suggestions = (props) => {
          const data = props  
          const options = props.results.map((r) => (
            <Link to={"/shop/?shopName="+r.name+"&shopId="+r.shopId}> 
              <li key={r.shopId}>
               <p>Shop name: {r.name}</p>
               <p>Location: {r.location}</p> 
               <p> Average Pricing: {r.avgPrice} </p>
               <p> Menu: {r.menu}</p>
              </li>
            </Link>
          ))
          return <ul>{options}</ul>
        }

        return (
            <div>
                  {/*=================Search bar & results =================*/}
                  <input type="text"
                    className="form-control"
                    name="Search"
                    placeholder="Search shop"
                    value={this.state.query}
                    onChange={this.searchShop}
                  />
                  <Suggestions results = {this.state.shop} />
                {/*=========================================================*/}
            </div>
        )
    }
}

export default SearchShop