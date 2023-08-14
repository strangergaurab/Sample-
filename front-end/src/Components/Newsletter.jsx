import React from 'react'
import  '../style/newsletter.css';
import { FiSend } from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className="containerrs">
      <div className="wrapperrs">
        <div className="titleess">
          <h5>Want to get the latest offers?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className="inputContainerr">
          <input type="email" placeholder='Type email...' />
          <FiSend className="sendIcon" />
        </div>
      </div>
    </div>
  )
}

export default Newsletter