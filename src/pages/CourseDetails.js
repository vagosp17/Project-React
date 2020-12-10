import { Row, Col,Container,Button, NavLink ,CardImg} from 'reactstrap';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams } from "react-router-dom";
import './CourseDetails.css' 



function CourseDetails() {
    
    const {idCourse} = useParams();

    function BlogPost() {
        return <div>ID Course:{idCourse}</div>;
      }

     //Kanw fetch ta courses  
    const [course, setCourse] = useState([])   
    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then((response) => {
                console.log(response)
                
            for (let i=0; i<response.data.length; i++)
            {
                if ( response.data[i].id === idCourse)
                {
                    setCourse(response.data[i])               
                }
            }

            })
    }, [])

    console.log("To course einai:" )
    console.log(course)
    console.log("To course exei tous instructures:") 
    console.log(course.instructors)

    //Kanw fetch tous instructores
    const [instr, setInstr] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/instructors")
            .then((response) => {
                console.log("Apandisi apo to response tou instr")
                console.log(response)
            
            for (let i=0; i<response.data.length; i++){
                if ( response.data[i].id === idCourse){
                    setInstr(response.data[i])

                }
            }

            })
    }, [])

    console.log("O instr einai:" )
    console.log(instr)
    // console.log("To onoma tou einai:" )
    // console.log(instr.name.first)
 
    // console.log(course.imagePath)

    // const instrFirstName = JSON.stringify(instr.name.first);
    // const instrLastName = JSON.stringify(instr.name.last);
    // console.log(myObjStr)
    console.log("To mail tou:")
    console.log(instr.email)

    return (
    <Container>
         <BlogPost/>
        {/* O titlos tou mathimatos */}
       <h1>{course.title} ({idCourse})</h1> 
        
        {/* H eikona tou mathimatos */}
       <CardImg className="course-img " src={course.imagePath} alt="img"/> 
        <hr/>
        
        {/* Oi plirofories tou mathimatos price/duration/bookable/dates]*/}
        <div className="course-details">
        <Row>
        {/* <Col xs="6"> Price: {course.price.normal}€</Col> */}
        <Col xs="6" >Duration: {course.duration}</Col>
      </Row>
     
      <Row>
      <Col xs="6" >Bookable: ✅</Col>
      {/* <Col xs="6"> Dates:{course.dates.start_date} : {course.dates.end_date}</Col> */}
      </Row>
      </div>

     
        {/*H perigrafafi tou course */}
        {/* <div dangerouslySetInnerHTML={ {__html: {course.description} } }/> */}
       <p>{course.description}</p>
        
           

            {/* {courses.map(course => (
                 <p>{course.id}</p> )                      
            )} */}
        
                
        {/* {
          course.map(function(course, idCourse)
          {
            return <div key={idCourse}>{course.title}</div>
          })  
        }  */}
        
        <div className="course-btn">
        <div className="edit-btn"><Button color="primary">Edit</Button>{' '}</div>   
        <div className="del-btn"><Button color="danger">Delete</Button>{' '}</div>
        </div>

        <h2>Instructors</h2>
        {/* <h4>{instrFirstName} {instrLastName} ({instr.dob})</h4> */}

        <div className="connection">
           <span>Email: {instr.email} | <NavLink  href={instr.linkedin}>LinkedIn</NavLink></span>
        </div>

        <span className="bio">{instr.bio}</span>

    </Container>
    )
}

export default CourseDetails



