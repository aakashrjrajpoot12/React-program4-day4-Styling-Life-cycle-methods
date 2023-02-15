import React from "react";
import "./style.css";

export default class Clock extends  React.Component {

constructor(props){
  //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
 super(props);
  this.state={date:new Date()};
}
//The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model).
//This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
componentDidMount(){
this.timerID=setInterval(()=>this.tick(),1000);//callback funstion which i am passing to setinterval and asking to call once in 1000 ms. 
}
//The componentWillMount() method allows us to execute the React code synchronously when the component gets loaded or mounted in the DOM (Document Object Model). 
//This method is called during the mounting phase of the React Life-cycle.
componentWillUnmount(){
clearInterval(this.timerID);
}

tick(){
  this.setState({
    date:new Date(),
  });
}
  render(){
  return (
    <div>
      <h1>Clock</h1>
      <p>It is {this.state.date.toLocaleTimeString()}</p>
    </div>
  );
}
}