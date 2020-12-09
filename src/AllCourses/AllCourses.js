import React, { useEffect, useState } from 'react'

import { Row, Col,Container } from 'reactstrap';
import Course from './Course/Course'
import './AllCourses.css'
import axios from 'axios'
function AllCourses() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then((response) => {
                setCourses(response.data)
            })
    }, [])
    return (
        
            <div>
                <Container>
                <h1 className="text-center">All courses</h1>
                <Row>
                    {courses.map(course => (
                        <Col md="4">
                            <Course
                                key={course.id}
                                title={course.title}
                                imagePath={course.imagePath}
                                price={course.price.normal}
                                startDate={course.dates.start_date}
                                endDate={course.dates.end_date}
                                description={course.description}
                                duration={course.duration}
                            />
                        </Col>
                    ))}
                </Row>
                </Container>
            </div>

    )
}

export default AllCourses
