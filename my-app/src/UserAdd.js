import React from 'react';
import * as ProjectBookAPI from './ProjectBookAPI'
import './SearchBooks.css'


class Button extends React.Component {

    render() {
        //renders a button that displays the state count
        return (<button

            onClick={() => { this.props.clickHandler() }}>
            <b>ADD</b>
        </button>
        )
    }


}



function ListItem(props) {

    return (<div class="column">
         
        <b>{props.item.name} {props.item.surname} {props.item.username} {props.item.email}</b><br/>
    
        
       {/*  {props.item.authors}  */}
      
    </div>
    )

}
function Author(props){
    return(
        <div>
            {props.item}
            </div>
    )
}

function Authors(props){
    return(<div>
        {
            props.authors.map(function(item,i){
                return <Author  key={i} item={item}/>
            })

        }
        </div>
    )
}

function ShowBook(props) {

    return (<div class="row">{props.users.map(function (item, i) {
        return <ListItem key={i} item={item} />
    }


    )
    }</div>
    )


}


class UserAdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            id:"",
            name: "",
            surname:"",
            email:"",
            username:"",
            password:"",
            iduserrole:0,
            users:[]
 
        };
        this.handleChange = this.handleChange.bind(this)
        this.ClickHandle = this.ClickHandle.bind(this)
   
    }

    ClickHandle() {

        ProjectBookAPI.addUser(this.state.name,this.state.surname,this.state.email,this.state.username,this.state.password,this.state.iduserrole);

    }



    handleChange(event) {

        this.setState({

            [event.target.name]: event.target.value
        })

    }


    render() {
        return (
            <div class="row">

                <table>
             
                    <tr>
                        <th>Name:</th>
                        <td><input name="name"
                            value={this.state.name}
                            onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Surname:</th>
                        <td><input name="surname"
                            value={this.state.surname}
                            onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td><input name="email"
                            value={this.state.email}
                            onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Username:</th>
                        <td><input name="username"
                            value={this.state.username}
                            onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Password:</th>
                        <td><input name="password"
                            value={this.state.password}
                            onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Role Id:</th>
                        <td><input name="iduserrole"
                            value={this.state.iduserrole}
                            onChange={this.handleChange} /></td>
                    </tr>

                    <tr>
                        <th><Button clickHandler={this.ClickHandle} /><br /></th>
                    </tr>
                </table>
                <b>Users Starting with {this.state.name} </b>
               
                </div>

        )

    }
}




export default UserAdd;

