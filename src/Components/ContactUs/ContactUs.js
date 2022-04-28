import React from 'react'

function ContactUs(props) {
    const {carName,model} = props;
  return (
    <div>
        <h2>The car Name is {carName} and the model is {model}</h2>
    </div>
  )
}

export default ContactUs