import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const CourseContents = ({ week }) => 
{
  // let listTopics = null;
  // if (week && week.topics) {
  //   listTopics = week.topics.map((topic) => <li key={uuidv4()}>{topic}</li>);}

  const [listTopics, setListTopics]= useState([]);
  useEffect(()=>{
    if (week && week.topics) {
      const topic = week.topics.map((topic) => <li key={uuidv4()}>{topic}</li>);
      setListTopics(topic);
    }
  }, [week, week.topics])
  
  return (
    <>
          <div className='col-md-6'>
            <h5 style={{ color: "#E26EE5" }}>Week {week.week}</h5>
            <ul className='text-start mt-4 mb-4' style={{ color: "white" }} >
              <li style={{listStyleType:"circle"}}>{listTopics}</li>
            </ul>
          </div>
    </>
  )
}

export default CourseContents