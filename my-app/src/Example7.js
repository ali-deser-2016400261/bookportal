import React from 'react';

class Button extends React.Component{
    
    render(){
        //renders a button that displays the state count
        return (<button  
            
            onClick= {()=> {this.props.clickHandler()}}>
            <b>Submit</b>
            </button>
        )
    }
    
    
}

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        //Initial state set up
        this.state = {name:"",surname:"",password1:"",password2:"",message:""}
        this.handleChange = this.handleChange.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        //binding is necessary to make 'this' point to the correct object
    }
    
    handleChange(event){
        
        this.setState({
            
            [event.target.name] : event.target.value})
            
            if(event.target.name=== "password2"){
                if(this.state.password1!=event.target.value){
                    this.setState({message:"Passwords should be same."}) 
                    
                }else{
                    this.setState({message:"Passwords are the same."}) 
                }
            }  
        }
        
        
        clickHandler(){
            if(this.state.name==""){
                this.setState({message:"Name cannot be left blank."})
            }else if(this.state.surname==""){
                this.setState({message:"Surname cannot be left blank."})
                
            }else if(this.state.password1!=this.state.password2){
                this.setState({message:"Passwords mismatch."})
                
            }else if(this.state.password1.length<4){
                this.setState({message:"Password should be longer than 4 characters"})
                
            }else{
                this.setState({message:"OK."})
            }
        }
        
        
        render(){
            return(
                <div>
                
                <table>
                <tr>
                <th>
                Name:
                </th>
                <td> <input name="name"
                value={this.state.name} 
                onChange={this.handleChange}/></td>
                </tr>
                <tr>
                <th>
                Surname :
                </th>
                <td>
                <input name="surname" 
                value={this.state.surname} 
                onChange={this.handleChange}/><br/>
                </td>
                </tr>
                <tr>
                <th>
                Password :</th>
                <td>
                <input name="password1" 
                value={this.state.password1} 
                onChange={this.handleChange}/><br/></td>
                </tr>
                <tr>
                <th>
                Password Confirm :</th>
                <td>
                <input name="password2"
                value={this.state.ğassword2} 
                onChange={this.handleChange}/><br/></td>
                
                </tr>
                <tr>
                <th>
                <Button clickHandler={this.clickHandler}/><br/>
                </th>
                <th>
                <div>{this.state.message}</div>
                </th>
                
                </tr>
                </table>
                
                </div>
                
            ) 
            
        }   
    }
    
    
    
    
    export default LoginForm;
    
