import React from 'react'
import { Card,CardImg,CardBody,CardTitle,CardText, Button } from 'reactstrap';
import './Course.css'
function Course({ title, imagePath, price, startDate, endDate, duration,seeDetails}) {
    
    return (
        <div >
            <Card className="course" outline color="secondary">
                <CardImg top width="100%" src={imagePath} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="font-weight-bold" tag="h5">{title}</CardTitle>
                    <CardText>
                        <span className="font-weight-bold">Price: </span>{price} | <span className="font-weight-bold">Bookable:</span> ✅
                    </CardText>
                    <CardText>
                    <span className="font-weight-bold">Duration: </span>{duration}
                    </CardText>
                    <CardText>
                        <span className="font-weight-bold">Dates:</span> {startDate} - {endDate}
                    </CardText>
                    <Button onClick={seeDetails}>View</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Course
