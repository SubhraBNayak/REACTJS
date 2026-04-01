import React from 'react';
import { Bookmark } from 'lucide-react';

const Card = ({company, logo, posted, role, tags, salary, location}) => {
  return (
    <div>
      <div className="card">
      <div className="top">
        <img src= {logo} alt = "logo" />
        <button>Save <Bookmark size={20} strokeWidth={1} /></button>
      </div>
      <div className="center">
        <h1>{company}</h1>
        <p>{posted}</p>
        <h2>{role}</h2>
        <div className='jobtags'>
          <div className="parttime">{tags[0]}</div>
          <div className="seniorlevel">{tags[1]}</div>
        </div>
      </div>
      <div className="bottom">
        <div className="paylocation">
          <h1>{salary}</h1>
          <h2>{location}</h2>
        </div>
        <button>Apply Now</button>
      </div>
      </div>
    </div>
  )
}

export default Card
