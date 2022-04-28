import React from 'react'
import ContactUs from './ContactUs/ContactUs'

function ListsAndKeys() {
    // const numbers = [1,2,3,4,5];
    // const listValues = numbers.map((number)=>(
    //     <li>{number}</li>
    // ))

    let studentDetails = [
    {
        id:1,
        name:'tom',
        age:15
    },
    {
        id:2,
        name:'jerry',
        age:15
    },
    {
        id:3,
        name:'virat',
        age:15
    },
  
    ]

    const details = studentDetails.map(studentdetail => (
        <li key={studentdetail.id}>{studentdetail.name}</li>
    ))
  return (
    <div>
        {/* <ul>{listValues}</ul> */}
        <ul>{details}</ul>
        <ContactUs carName="Mahindra" model="2005" />
    </div>
  )
}

export default ListsAndKeys