import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import Menu from "./MenuComponent";

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        };
    }

    renderComments(dish){
        if(dish!=null && dish.comments!=null){
            const cmnt=dish.comments.map(c => {
                return(
                    <div className="list-unstyled">
                        <li className="list-item" key={c.id}>{c.comment}
                        <p>--{c.author} , 
                        {  new Intl.DateTimeFormat('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: '2-digit' }).format(new Date(c.date))}
                        </p>
                        </li>
                    </div>
                );
            });
            return(
                <div className="container">
                    <h4>Comments:</h4>
                    {cmnt}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        const dish=this.props.selectedDish;
        console.log(dish);
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>
            </div>
        )
    }
}

export default DishDetail;