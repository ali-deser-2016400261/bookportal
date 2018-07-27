import React from 'react';

class Button extends React.Component{
    
    render(){
        //renders a button that displays the state count
        return (<button  
            
            onClick= {()=> {this.props.clickHandler}}>
            <b>Submit</b>
            </button>
        )
    }
    
    
}
class DeleteButton extends React.Component{
    
    render(){
        //renders a button that displays the state count
        return (<button  
            
            onClick= {()=> {this.props.clickHandler}}>
            <b>Submit</b>
            </button>
        )
    }
    
    
}
class IncrementButton extends React.Component{
    
    render(){
        //renders a button that displays the state count
        return (<button  
            
            onClick= {()=> {this.props.clickHandler}}>
            <b>Submit</b>
            </button>
        )
    }
    
    
}
class DecrementsButton extends React.Component{
    
    render(){
        //renders a button that displays the state count
        return (<button  
            
            onClick= {()=> {this.props.clickHandler}}>
            <b>Submit</b>
            </button>
        )
    }
    
    
}

class ControlledInput extends React.Component{
    constructor(props){
        super(props)
        //Initial state set up
        this.state = {inputName:"",inputSurname:"",inputArray:[]}
        this.handleChange = this.handleChange.bind(this)

        this.myArray = this.myArray.bind(this)
        //binding is necessary to make 'this' point to the correct object
    }
    
    
    
    myArray(){
        var newArray = this.state.inputArray.slice();    
        newArray.push(this.state.inputName);   
        this.setState({inputArray:newArray})
/*         {this.state.inputArray.map(function(name, index){
            return <li key={ index }>{name}</li>;
        })} */
    }
    
    
    
    
    
    
    handleChange(event){
        
        this.setState({
            
            [event.target.name] : event.target.value})
            
            
            
        }
        
        
        showList(){
            return(<table border="1">
            <tr>
            <th>Month</th>
            <th>  {this.state.inputArray.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                })}</th>
            <th>Savings</th>
            </tr>
          
      
     
            </table>
            )
            
        }
        
        
        render(){
            return(
                <div>
                Urlden gelen=<br/>
                <table>
                <tr>
                <th>
                Name:
                </th>
                <td> <input name="inputName"
                value={this.state.inputName} 
                onChange={this.handleChange}/></td>
                </tr>
                
                
                <tr>
                <th>
                <input name="inputButton" type="button" value="Submit" onClick={this.myArray}/>
                <Button clickHandler={this.myArray}/><br/>
                </th>
                <th>
                <div>
                
                {this.state.inputArray.map(function(name, index){
                    return <div> <DeleteButton clickHandler={this.myArray}/> { index }>{name}</div>;
                })}
               

               
                </div>
                </th>
                
                </tr>
                </table>
                
                </div>
                
            ) 
            
        }   
    }
    
    
    
    
    export default ControlledInput;
    
