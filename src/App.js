import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import Header from "./Header/Header";
// import Dashboard from './Dashboard/Dashboard'
// import AllCourses from './AllCourses/AllCourses'

// Pages
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import AddNewCourse from "./pages/AddNewCourse";


function App() {
  return (
    <div className="App">  
      <React.Fragment>
   
   <Router>
   <Header/>
     <Switch>
       <Route  exact path="/"  component={Home} />
       <Route   path="/pages/Home"  component={Home} />
       <Route   path="/pages/CoursesPage" component={CoursesPage} />
       <Route   path="/pages/AddNewCourse" component={AddNewCourse} />
     </Switch>
   </Router>
 
      {/* <Dashboard/> */}
      {/* <AllCourses/> */}
      </React.Fragment>
    </div>
  );
}

export default App;
