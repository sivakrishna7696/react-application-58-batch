import React, { Component } from 'react'

 
            // lifecycle methods 
            //     1) mounting - when an instance of a component is created and inserted to the DOM.
            //     2) updating 
            //     3) unmounting
            //     4) Error handling

export class Componentlifecycle extends Component {
    //intilizationn phase
    //methods in Mounting phase

    constructor(props){
        super(props)

        this.state = {
            users:[{}],
        }
        console.log('component Constructor');
    }

    static getDerivedStateFromProps(){
        console.log("staticget derieved state from props")
        return null;
    }

    async getUserData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
        const data = await response.json();
        console.log(data);
        this.setState({users:data})
    }
        

    // componentDidMount()
    componentDidMount(){
        // console.log("component didmount")
        this.getUserData();
        }

  render() {
      console.log("render method")
    return (
      <div>
          <h2>Component life cycle methods</h2>
          <table class="table table-striped table-hover">
                       
                       <tr>
                           <th>Id</th>
                           <th>Name</th>
                           <th>username</th>
                           <th>address</th>
                       </tr>
            {
                this.state.users.map((user)=>(
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.address?.street}</td>
                    </tr>
                    )) 
            }
              </table>
      </div>
    )
  }
}

export default Componentlifecycle