import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        //Initial state set up
        this.state = {message:"initial message."}
    }
    
    
    componentDidMount(){
        //updating state
        this.setState((prevState,props) => {return {message:prevState.message+ '!'}})
        this.setState((prevState,props) => {return {message:prevState.message+ '!'}})
        this.setState((prevState,props) => {return {message:prevState.message+ '!'}})
        this.setState((prevState,props) => {return {message:prevState.message+ '!'}})
        //Javascriptteki this içinde bulunduğu objeyi değil, kendini çalıştıranı(sistemi) tanımlar
    }
    
    render(){
        return<div>Message:{this.state.message}</div>
    }
    
    
}

export default Counter;

