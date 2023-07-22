import React from 'react'

import "./share.css"

const Share = () => {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src="/assets/public/1.jpeg" alt="" />
        <input
          placeholder="What's in your mind Safak?"
          className="shareInput"
        />
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                  
                  <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                  
                  <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
             
                  <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                  
                  <span className="shareOptionText">Feelings</span>
              </div>
          </div>
          <button className="shareButton">Share</button>
      </div>
    </div>
  </div>
  )
}

export default Share