import React, { useEffect, useState } from 'react'

function PaginationHooks() {
    const [users,setUsers] = useState([]);
    const [pageNumber,setPageNumber] = useState(1);

    //componentDidMount
        useEffect(()=>{
            console.log("componentDidMount");
        },[])

    //componentDidUpdate
    useEffect(()=>{
        getUsersData();
        console.log("component update")
    },[pageNumber])


    //similar to componentWillUnmount
    useEffect(()=>{
        return()=>{
            console.log('component will Unmount');
        }
    })

    
    const getUsersData = async()=>{
        const response = await fetch(
            `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,{
                method : 'GET',
                headers :{
                    'app-id' : '626a7eda178f71c466f4cdc8'
                }
            }
            )
        
        const {data}  = await response.json()
      // console.log(data)
      setUsers(data)
        // console.log(this.state.users)
        
        // const data = await response.json();
        // console.log(data)
    }
  return (
    <div>
        <h2>Pagination using Hooks</h2>
        <div>
          <h2>Pagination</h2>
          <div className="container">
            <div className='row'>
                {users && users.length > 0 && users.map((user)=>(
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
                onClick={(e)=>setPageNumber(num)}
                >{num}</button>)
            }
          </div>
      </div>
    </div>
  )
}

export default PaginationHooks