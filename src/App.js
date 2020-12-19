import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

import Header from "./Header/Header";
// import Dashboard from './Dashboard/Dashboard'
// import AllCourses from './AllCourses/AllCourses'

// Pages
import CourseForm from "./pages/CourseForm";
import Dashboard from './Dashboard/Dashboard'
import CourseDetails from './pages/CourseDetails';
import AllCourses from './AllCourses/AllCourses';
import AddNewCourse from './pages/AddNewCourse';

function App() {

  return (
    <div className="App">  
      <React.Fragment>
   
      <Router>
   <Header/>
     <Switch>
       <Route  exact path="/"  component={Dashboard} />
       <Route   path="/Home"  component={Dashboard} />
       <Route   path="/CoursesPage" component={AllCourses} />
       <Route   path="/AddNewCourse" component={AddNewCourse} />
       <Route   path="/CourseDetails/:idCourse" component={CourseDetails}/>
     </Switch>
   </Router>

      </React.Fragment>
    </div>
  );
}

export default App;
