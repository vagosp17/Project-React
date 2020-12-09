/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import { Jumbotron,Container,Row,Col} from 'reactstrap';
import './Dashboard.css'
import Statistic from './Statistic/Statistic'
import CoursesTable from './CoursesTable/CoursesTable'
import axios from 'axios';
function Dashboard() {
    const [statistics,setStatistics]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/stats")
        .then((response)=>{
            console.log(response.data)
            setStatistics(response.data)
        })
    }, [])
    return (
        <div className="content">
            <Container>
                <Jumbotron>
                    
                    <h1>Welcome to Code.Hub Dashboard!</h1>
                    <br></br>
                    <h2>Manage Everything and have fun!</h2>

                </Jumbotron>
                <Row>
                    
                        {statistics.map(stat=>(
                            <Col><Statistic key={stat.id}title={stat.title} amount={stat.amount}/></Col>
                        ))}
                    

                </Row>
                <CoursesTable/>
                
            </Container>
            
        </div>
    )
}

export default Dashboard
