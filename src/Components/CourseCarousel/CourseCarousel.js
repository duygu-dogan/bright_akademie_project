import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';
import './CourseCarousel.css'

const CourseCarousel = (props) => {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const handleDetailClick = () => {
        setIsBtnClicked(true);
    }
    if (isBtnClicked) {
        return <Navigate to={`/courses/details/${props?.id}`} />
    }

    return (
        <>
            <div className="card px-4 w-100 carousel-card" style={{ backgroundColor: "rgba(0, 0, 0, .8)" }}>
                <div className="row g-0">
                    <div className="col-md-4 col-sm-12 justify-content-center d-flex">
                        <FontAwesomeIcon className='carousel-icon' icon={props?.icon} />
                    </div>
                    <div className="col-md-8 col-sm-12 ">
                        <div className="card-body">
                            <h5 className="card-title">{props?.name}</h5>
                            <p className="card-text">{props?.why_this_training}</p>
                            <Button onClick={handleDetailClick}>More Details</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCarousel