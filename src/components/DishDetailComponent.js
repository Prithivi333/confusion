import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


    function RenderComments({dish}){
        if(dish!=null && dish.comments!=null){
            const cmnt=dish.comments.map(c => {
                return(
                    <ul className="list-unstyled" key={c.id}>
                        <li className="list-item">{c.comment}
                        <p>--{c.author} , 
                        {  new Intl.DateTimeFormat('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: '2-digit' }).format(new Date(Date.parse(c.date)))}
                        </p>
                        </li>
                    </ul>
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

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <Card key={dish.id}>
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

    const DishDetail=(props)=>{
        //const dish=props.selectedDish;
        //console.log(dish);
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish}/>
                </div>
            </div>
            </div>
        )
    }

export default DishDetail;