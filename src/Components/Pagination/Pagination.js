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

    componentDidUpdate(prevProps,prevsState){
        console.log(prevProps,prevsState);
      
        if(prevsState.pageNumber !== this.state.pageNumber ){
            this.getUsersData();
        }
    }

    // updateUserData = (number)=>{

    // }

    handleButtonClick = (num)=>{
        // console.log(num);
        // this.updateUserData(num);
        num = parseInt(num);
        this.setState({pageNumber:num})
        console.log(this.state.pageNumber)
    }



  render() {
    return (
      <div>
          <h2>Pagination</h2>
          <div className="container">
            <div className='row'>
                {this.state.users && this.state.users.length > 0 && this.state.users.map((user)=>(
                    // <h2>{user.name}</h2>
                    <div className='col-md-6 mt-4'>
                        <div className='card '>
                            <div className='row'>
                                <div className='col-md-4 p-4'>
                                    <img src={user.picture} className="img-fluid" alt={user.title} />
                                </div>
                                <div className='col-md-8'>
                                    <div>
                                        <p>{user.id}</p>
                                        <p>{user.title} {user.firstName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* pagination section */}
          <div className="container">
            {
                [1,2,3,4,5,6,7,8,9].map((num)=><button className='btn btn-primary m-3' 
                onClick={(e)=>this.handleButtonClick(num)}
                >{num}</button>)
            }
          </div>
      </div>
    )
  }
}

export default Pagination