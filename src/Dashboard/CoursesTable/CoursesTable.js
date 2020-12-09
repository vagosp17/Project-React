import React, { useState, useEffect } from 'react'
import { Table,Button } from 'reactstrap';
import './CoursesTable.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
function CoursesTable() {
    const [courses, setCourses] = useState([]);
    const history=useHistory();
    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then((response) => {
                console.log(response.data)
                console.log(response.data.length)
                let temp=[]
                for(let i=response.data.length-5;i<response.data.length;i++){
                    temp.push(response.data[i])
                }
                setCourses(temp)
            })
    }, [])
    return (
        <div className="coursesTable">
            <h4>Last 5 courses</h4>
            <Table dark>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Bookable</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <th scope="row">ℹ</th>
                            <td>{course.title}</td>
                            <td className="">✅</td>
                            <td>{course.price.normal}€</td>
                            <td>{course.dates.start_date}-{course.dates.end_date}</td>
                            <td><Button onClick={()=>history.push("/CourseDetails/"+course.id+"")} color="primary">View Details</Button></td>
                        </tr>
                    ))}


                </tbody>
            </Table>
            <Button onClick={()=>history.push('/CoursesPage')}className="allCourses"color="primary">See all Courses</Button>
        </div>
    )
}

export default CoursesTable
