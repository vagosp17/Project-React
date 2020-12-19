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

  useEffect(() => {
    axios.get(`http://localhost:3001/courses`).then((response) => {
      setNewCourseId(response.data.length + 1);
    });
  }, [])

  const addCourse = async (data) => {
    console.log(data)
    await axios
      .post(API, {
        ...data,
        id: newCourseId,
      })
      .then((res) => {
        history.push('/CoursesPage')
        console.log(res.data);
      });
  };

   return(
     <div className="add-new-course">
       <CourseForm addCourse={addCourse} formTitle={"Add new Course"}/>
     </div>
   )
    
}


export default AddNewCourse