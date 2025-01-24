import React from 'react'
import "../Collaborate/collaborate.css"

const Collaborate = () => {
  return (
    <div className="collaborate">
      <div className="leftside">
      <h1>Collaborate with Me :)</h1>
      <p>How about starting to build something incredible together? If this sounds good, hit submit and let me know what you have in mind. I'm sure it will be superb!</p>
      </div>
      <div className="rightside">
        <form action="">
            <input type="text" placeholder='Enter Your name' />
            <input type="email" placeholder='Enter Your Email'/>
            <input type="text" placeholder='Drop Your Ideas 🧿' id='idea'/>
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Collaborate