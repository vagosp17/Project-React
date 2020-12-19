import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, Form, FormGroup, Label } from "reactstrap";
import "./CourseForm.css";

const CourseForm = ({
  course = null,
  addCourse,
  editCourse,
  formTitle,
  formInstructors,
}) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [open, setOpen] = useState(false);
  const [instructors, setInstructors] = useState(formInstructors);
  const [description, setDescription] = useState("");
  const [dates, setDates] = useState({
    start_date: "",
    end_date: "",
  });
  const [price, setPrice] = useState({
    normal: "",
    early_bird: "",
  });

  const data = {
    title,
    duration,
    imagePath,
    description,
    open,
    dates,
    instructors,
    price,
  };
  const { start_date, end_date } = dates;
  const { normal, early_bird } = price;

  useEffect(() => {

    if (course) {
      setTitle(course.title);
      setDuration(course.duration);
      setImagePath(course.imagePath);
      setOpen(course.open);
      setDescription(course.description);
      setDates({
        start_date: course.dates.start_date,
        end_date: course.dates.end_date,
      });
      setPrice({
        normal: course.price.normal,
        early_bird: course.price.early_bird,
      });
    } else {
      setInstructors(formInstructors)
    }
  }, [course,formInstructors]);

  const onInputChange = (event, setState) => {
    const { name, value } = event.target;

    if (name === "instructors") {
      
      setState((inst) => {
        return inst.map((element)=>({
            ...element,
            checked:event.target.value===element.id?!element.checked:element.checked
          }
        ))
          
        
      });


    } else if (name === "start_date" || name === "end_date") {
      setState((dates) => {
        return {
          ...dates,
          [name]: value,
        };
      });
    } else if (name === "normal" || name === "early_bird") {
      setState((price) => {
        return {
          ...price,
          [name]: value,
        };
      });
    } else if (name === "open") {
      setState(!open);
    } else {
      setState(event.target.value);
    }
  };
  console.log(instructors)
  return (
    <div>
      <Form className="form">
        <h2 className="form__title">{formTitle}</h2>
        {[
          {
            field: "title",
            state: title,
            type: "text",
            placeholder: "Title",
            setState: setTitle,
          },
          {
            field: "duration",
            state: duration,
            type: "text",
            placeholder: "Duration",
            setState: setDuration,
          },
          {
            field: "imagePath",
            state: imagePath,
            type: "text",
            placeholder: "Image path",
            setState: setImagePath,
          },
          {
            field: "description",
            state: description,
            type: "textarea",
            placeholder: "Description",
            setState: setDescription,
          },
          {
            field: "open",
            state: open,
            placeholder: "Bookable",
            type: "checkbox",
            setState: setOpen,
          },
        ].map(({ field, state, type, placeholder, setState }) =>
          type == "text" || type == "textarea" ? (
            <FormGroup key={field}>
              <Label>{`${placeholder} :`}</Label>
              <Input
                type={type}
                placeholder={placeholder}
                value={state}
                name={field}
                onChange={(e) => onInputChange(e, setState)}
              />
            </FormGroup>
          ) : (
            <Label check>
              {/* <Input type="checkbox" />{' '} */}
              <Input
                type={type}
                value={state}
                name={field}
                checked={state}
                onChange={(e) => onInputChange(e, setState)}
              />
              {placeholder}
            </Label>
          )
        )}

        <hr />
        <br />

        <h3>Instructors</h3>
        {instructors.map((instructor) => (
          <FormGroup key={instructor.id} controlId={"instructors"}>
            <Input
              type={"checkbox"}
              value={instructor.id}
              name={"instructors"}
              onChange={(e) => onInputChange(e, setInstructors)}
              checked={instructor.checked}
            />
            <Label>{`${
              instructor.name.first+" "+instructor.name.last
            } `}</Label>
          </FormGroup>
        ))}

        <h3>Dates</h3>
        {[
          {
            field: "start_date",
            state: start_date,
            type: "text",
            placeholder: "Start date",
            setState: setDates,
          },
          {
            field: "end_date",
            state: end_date,
            type: "text",
            placeholder: "End date",
            setState: setDates,
          },
        ].map(({ field, state, type, placeholder, setState }) => (
          <FormGroup key={field}>
            <Label>{`${placeholder} :`}</Label>
            <Input
              type={type}
              placeholder={placeholder}
              value={state}
              name={field}
              onChange={(e) => onInputChange(e, setState)}
            />
          </FormGroup>
        ))}

        <hr />
        <br />

        <h3>Price</h3>
        {[
          {
            field: "normal",
            label: "Normal",
            state: normal,
            type: "text",
            placeholder: "0",
            setState: setPrice,
          },
          {
            field: "early_bird",
            label: "Early Bird",
            state: early_bird,
            type: "text",
            placeholder: "0",
            setState: setPrice,
          },
        ].map(({ field, label, state, type, placeholder, setState }) => (
          <FormGroup key={field}>
            <Label>{`${label} :`}</Label>
            <Input
              type={type}
              placeholder={placeholder}
              value={state}
              name={field}
              onChange={(e) => onInputChange(e, setState)}
            />
          </FormGroup>
        ))}

        <hr />
        <br />

        {course ? (
          <Button
            className="edit-btn"
            color="primary"
            onClick={() => editCourse(data)}
          >
            Edit
          </Button>
        ) : (
          <Button
            className="add-btn"
            color="primary"
            onClick={() => addCourse(data)}
          >
            Add Course
          </Button>
        )}
      </Form>
    </div>
  );
};
export default CourseForm;
