import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        //Initial state set up
        this.state = {count:0, name:"Meric"}
        this.clickHandler = this.clickHandler.bind(this)
        //binding is necessary to make 'this' point to the correct object
    }
    
    
   clickHandler(){
       //increments the count of the state
       this.setState((prevState,props)=> { return {count:prevState.count+1}})
      
   }
/*    componentDidMount(){
    //updating state
    this.setState((prevState,props) => {return {name:prevState.name+"Meric"}})
  
    //Javascriptteki this içinde bulunduğu objeyi değil, kendini çalıştıranı(sistemi) tanımlar
} */
    render(){
        //renders a button that displays the state count
        return <div>Name:{this.state.name} <button onClick = {this.clickHandler}>{this.state.count}</button>
      </div>
    }
    
    
}

export default Counter;

