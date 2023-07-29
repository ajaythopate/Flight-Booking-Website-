import React from 'react';
import "../../components/Subscribes/subscribes.css";

const Subscribes = () => {
  return (
    <div className="subscribe section">
      <div className="sectionConatiner container">
        <h2>Subscribe Newsletters & get Latest news</h2>
        <div className="inputDiv flex">
          <input tyoe="text" placeholder="Enter your email address" />
          <button className="subBtn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribes