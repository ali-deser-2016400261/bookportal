import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        //Initial state set up
        this.state = {value:0}
    }
    
    
    componentDidMount(){
        //updating state
        this.setState({value:this.state.value+1})
        this.setState({value:this.state.value+1})
        this.setState({value:this.state.value+1})
        this.setState({value:this.state.value+1})
        setTimeout(function(){this.setState({value:this.state.value+1})},1000);

        //Javascriptteki this içinde bulunduğu objeyi değil, kendini çalıştıranı(sistemi) tanımlar
    }
    
    render(){
        return<div>Message:{this.state.value}</div>
    }
    
    
}

export default Counter;

