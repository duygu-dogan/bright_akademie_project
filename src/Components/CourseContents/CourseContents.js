import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const CourseContents = ({ week }) => 
{
  // const [listTopics, setListTopics]= useState([]);
 
  let listTopics = null;
  if (week && week.topics) {
    listTopics = week.topics.map((topic) => <li key={topic}>{topic}</li>);}
  // useEffect(()=>{
  //   if (week && week.topics) {
  //     const topic = week.topics.map((topic) => <p key={topic}>{topic}</p>);
  //     setListTopics(topic);
  //     console.log(listTopics)
  //   }
  // }, [listTopics])
  
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