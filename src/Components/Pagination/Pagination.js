import React, { Component } from 'react'

export class Pagination extends Component {
    state = {
        pageNumber : 1,
        users : []
    }

    getUsersData = async()=>{
        const response = await fetch(
            `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,{
                method : 'GET',
                headers :{
                    'app-id' : '626a7eda178f71c466f4cdc8'
                }
            }
            )
        
        const {data}  = await response.json()
        // console.log(data)
        this.setState({users:data})
        // console.log(this.state.users)
        
        // const data = await response.json();
        // console.log(data)
    }

    componentDidMount(){
        this.getUsersData();
    }

  render() {
    return (
      <div>
          <h2>Pagination</h2>
          <div className="container">
            <div className='row'>
                {this.state.users && this.state.users.length > 0 && this.state.users.map((user)=>(
                    // <h2>{user.name}</h2>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={user.picture} className="img-fluid" alt="userimage" />
                                </div>
                                <div className='col-md-8'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </div>
    )
  }
}

export default Pagination