import React from 'react'
import {userContext} from '../../App';

function Compc() {
  return (
    <>
        <userContext.Consumer>
          {value =><div>{value}</div>}
        </userContext.Consumer>
    </>
  )
}

export default Compc