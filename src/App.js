import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import Header from "./Header/Header";
// import Dashboard from './Dashboard/Dashboard'
// import AllCourses from './AllCourses/AllCourses'

// Pages

import AddNewCourse from "./pages/AddNewCourse";
import Dashboard from './Dashboard/Dashboard'
import CourseDetails from './pages/CourseDetails';
import AllCourses from './AllCourses/AllCourses';


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
       <Route   path="/CourseDetails/:id" component={CourseDetails}/>
     </Switch>
   </Router>
 
      {/* <Dashboard/> */}
      {/* <AllCourses/> */}
      </React.Fragment>
    </div>
  );
}

export default App;
