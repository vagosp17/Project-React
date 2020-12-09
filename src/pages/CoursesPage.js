// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import AllCourses from '../AllCourses/AllCourses'


const CoursesPage = () =>{
    
//     const [courses, setCourses] = useState([])
//     useEffect(() => {
//         axios.get("http://localhost:3000/courses")
//             .then((response) => {
//                 setCourses(response.data)
//                 console.log (response)
//             })
//     }, [])


    return(
       <> 
       <h1>Courses page</h1>
       <AllCourses/> 
       </>
    );
}


export default CoursesPage




// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'



  

// function FetchingData() {
//     const [photos, setPhotos] = useState([]);

//     useEffect(()=>{
//         axios.get('http://localhost:3001/courses')
//         .then(response => {
//             console.log(response)
//             setPhotos(response.data)
//         })
//     })

//     return (
        

//         <div>
//             <h1>Courses Page</h1>
//             <ul>
//                {photos.map(photos => (<li>{photos.photo}</li>)
//                )}
//             </ul>
//         </div>
//     )
// }

// export default FetchingData


