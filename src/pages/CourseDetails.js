import {
  Row,
  Col,
  Container,
  Button,
  NavLink,
  CardImg,
  Link,
  Badge,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "./CourseDetails.css";
import CourseForm from "./CourseForm";
import { API } from "../api";
import PopUp from "./PopUp";

function CourseDetails() {
  let history = useHistory();
  const { idCourse } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [course, setCourse] = useState({});
  const [instr, setInstr] = useState([]);
  
 
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/courses/${idCourse}`).then((response) => {
      //   console.log(response);

      setCourse(response.data);

      const instrLen=response.data.instructors

      axios.get("http://localhost:3001/instructors").then((response) => {
        //   console.log("Apandisi apo to response tou instr");
        //   console.log(response);
        const tempres=[]
        for (let j = 0; j < response.data.length; j++) {
          let temp
          for(let i=0;i<instrLen.length;i++){
 
            if(instrLen[i]===response.data[j].id){
          
              temp={
                id:response.data[j].id,
                email: response.data[j].email,
                checked: true,
                name:{first:response.data[j].name.first,last:response.data[j].name.last},
                linkedin: response.data[j].linkedin,
                
              }
              break;
           
            }else{
         
              
              temp={
                id:response.data[j].id,
                email: response.data[j].email,
                checked: false,
                name:{first:response.data[j].name.first,last:response.data[j].name.last},
                linkedin: response.data[j].linkedin,
                
              }
            }
          }

          tempres.push(temp)
         
        }
        console.log(tempres)
         setInstr(tempres)
      
  
      })
    //   for(let i=0;i<response.data.instructors.length;i++){
    //     axios.get(`http://localhost:3001/instructors?id=${response.data.instructors[i]}`).then((response)=>{
         
    //       let temp={
    //         email:response.data[0].email,
    //         checked:true,
    //         name:response.data[0].name.first+" "+response.data[0].name.last,
    //         linkedin:response.data[0].linkedin
    //       }

    //       console.log(temp)
    //       
    //     })
    // }
     
    });
   

  }, [editModal]);

  const deleteCourse = async (id) => {
    // console.log("To id tou course :" + id);
    await axios.delete(`${API}/${course.id}`).then((response) => {
      history.push("/CoursesPage");
    });
  };

  const editCourse = async (data) => {
    
    const formData={
      ...data,
      instructors:data.instructors.filter((ins)=>ins.checked).map((ins)=>ins.id)
    }
    console.log(formData)
    await axios
      .put(`http://localhost:3001/courses/${course.id}`, formData )
      .then((res) => {
        setEditModal(!editModal);
        
      });
    //axios get 
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  
  return (
    <Container>
      {/* <pageId/> */}
      {/* O titlos tou mathimatos */}
      <div className="course-title">
        <h1>
          {course.title} ({idCourse})
        </h1>
      </div>

      {/* H eikona tou mathimatos */}
      <CardImg className="course-img " src={course.imagePath} alt="img" />
      <hr />

      <div className="course-details">
        <Row>
          <Col xs="6"> Price: {course?.price?.normal}€</Col>
          <Col xs="6">Duration: {course.duration}</Col>
        </Row>

        <Row>
          <Col xs="6">Bookable: {course.open?"✅":"❌"}</Col>
          <Col xs="6">
            {" "}
            Dates: {course?.dates?.start_date} : {course?.dates?.end_date}
          </Col>
        </Row>
      </div>

      <div className="course-description">
        <p>{course.description}</p>
      </div>

      <div className="btn-selections">
          <div class="btn-option ">
        <PopUp
          header={"Edit Course"}
          color={"primary"}
          btn_label={"Edit"}

          showModal={editModal}
          toggleModal={toggleEditModal}
        >
          <CourseForm course={course} editCourse={editCourse} formInstructors={instr} />
        </PopUp>
        </div>
        <div class="btn-option ">
        <PopUp
          footer={
            <div>
              <Button color="secondary" onClick={()=>toggleDeleteModal()}>Cancel</Button>
              <Button color="danger" onClick={() => deleteCourse(idCourse)}>
                Delete
              </Button>
            </div>
          }
          header={"Delete Course"}
          color={"danger"}
          btn_label={"Delete"}
          showModal={deleteModal}
          toggleModal={toggleDeleteModal}
        >
          Do you want to remove?
        </PopUp>
        </div>
      </div>

      <h2>Instructors</h2>

      <div className="connection">
        {instr.map(instructor=>(
          instructor.checked&&
                  <span>
                  Email: {instructor.email} |{" "}
                  <Badge href={instructor.linkedin} color="primary">
                    LinkedIn
                  </Badge>
                  <br/>
                </span>
                
        ))}

      </div>

      <div className="bio">
        <span>{instr.bio}</span>
      </div>
    </Container>
  );
}

export default CourseDetails;


