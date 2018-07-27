import React from 'react';

class Button extends React.Component{
    
    render(){
        //renders a button that displays the state count
        return (<button  
        style = {{color: this.props.active? 'green':'blue', width:'200px', height:'50px', fontSize:'20pt'}}
        onClick= {()=> {this.props.clickHandler(this.props.id,this.props.name)}}>
        <b>{this.props.name}</b>
        </button>
        )
    }
    
    
}

export default Button;

