import React, {useState,useEffect} from 'react';
import axios from 'axios'
import { Button, Input, Form, FormGroup, Label,Col,Row } from 'reactstrap';
import {API} from '../api';
import CourseForm from './CourseForm'
import './AddNewCourse.css' 
import { useHistory } from 'react-router-dom';

const AddNewCourse = () =>{
  let history=useHistory()
  const [newCourseId, setNewCourseId] = useState();
  const [instructors,setInstructors]=useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/courses`).then((response) => {
      setNewCourseId(response.data.length + 1);
    });

    const getInst=async()=>{
      const res=await axios.get(`http://localhost:3001/instructors`)
      setInstructors(res.data);
    }
    getInst()
  }, [])

  const addCourse = async (data) => {

    const formData={
      ...data,
      instructors:data.instructors.filter((ins)=>ins.checked).map((ins)=>ins.id)
    }
    await axios
      .post(API, {
        ...formData,
        id: newCourseId,
      })
      .then((res) => {
        history.push('/CoursesPage')
        console.log(res.data);
      });
  };

   return(
     <div className="add-new-course">
       <CourseForm addCourse={addCourse} formTitle={"Add new Course"} formInstructors={instructors}/>
     </div>
   )
    
}


export default AddNewCourse