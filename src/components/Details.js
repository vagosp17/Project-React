import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Details() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then((response) => {
                console.log(response)
                setCourses(response.data)
            })
    }, [])

    

    return (
        
            <div>
              {courses.map(course => (
                 <p>{course.description}</p>            
                 ))}  

                 
            </div>

    )
}

export default Details
