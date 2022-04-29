import React from "react";

class ContactUs extends React.Component {

  state = {
      firstName : '',
      lastName:'',
      email:'',
      password:''
  }

  handleChange = (e) =>{
    // console.log(e)
    const {name,value} = e.target;
    this.setState({ [name] : value},function(){
      console.log(this.state);
    })
    console.log("afer setstate");
    }

    handleSubmit = (e)=>{
      e.preventDefault();
    }

   render(){ 
  return (
    <div>
      <div className="container">
        <center>
          <h2>Form Validation</h2>
        </center>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your FirstName"
                  name='firstName'
                  // value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="lastName"
                  className="form-control"
                  placeholder="Enter your LastName"
                  name="lastName"
                  // value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  name="email"
                  // value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  name="password"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <button className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
}

export default ContactUs;
