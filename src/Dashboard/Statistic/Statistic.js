import React from 'react'
import { Card, Badge, CardText } from 'reactstrap';
import './Statistic.css'
function Statistic({title,amount}) {
    return (
        <div >

                <Card body className="statistic">
                    <div className="primary">
                    <CardText className="text-uppercase float-left">{title}: </CardText>
                    <span><Badge className="badge-dark float-left align-middle">{amount}</Badge></span>
                    </div>
                </Card>
       

        </div>
    )
}

export default Statistic
