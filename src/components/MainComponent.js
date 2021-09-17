import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import { Component } from 'react';
import DishDetail from "./DishDetailComponent";


class Main extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishID){
    this.setState({selectedDish:dishID});
  }

  render(){
  return (
    <div>
      <Header />
      <Menu dishes={this.state.dishes}
        onClick={(dishID)=>this.onDishSelect(dishID)} />
      <DishDetail 
        dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
        <Footer />
    </div>
  );
}
}

export default Main;
