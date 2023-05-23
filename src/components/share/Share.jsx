import React from 'react'
import {MdPhotoLibrary} from "react-icons/md";
import {BsEmojiLaughingFill} from "react-icons/bs"
import {IoLocationSharp} from "react-icons/io5"
import {AiFillTag} from "react-icons/ai"

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
                  <MdPhotoLibrary htmlColor="tomato" className="shareIcon"/>
                  <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                  <AiFillTag htmlColor="blue" className="shareIcon"/>
                  <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
               < IoLocationSharp htmlColor="green" className="shareIcon"/>
                  <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                  <BsEmojiLaughingFill htmlColor="goldenrod" className="shareIcon"/>
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