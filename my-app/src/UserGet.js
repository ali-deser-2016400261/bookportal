import React from 'react';
import * as ProjectBookAPI from './ProjectBookAPI'
import './SearchBooks.css'


class Button extends React.Component {

    render() {
        //renders a button that displays the state count
        return (<button

            onClick={() => { this.props.clickHandler() }}>
            <b>GET</b>
        </button>
        )
    }


}



function ListItem(props) {

    return (<div class="column">
         
        <b>{props.item.username} {props.item.name} {props.item.surname}</b><br/>
    
        
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


class UserGet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            name: "",
            username:"",
            users:[],
            abc:""
        };
        this.handleChange = this.handleChange.bind(this)
        this.ClickHandle = this.ClickHandle.bind(this)
   
    }

    ClickHandle() {

        ProjectBookAPI.getUser(this.state.username).then((users) =>{
            if(!users || users.hasOwnProperty('error')){
                this.setState({users:[], first:false})
            } else{
                this.setState({users:users})
            }
        });

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
                        <th>Username:</th>
                        <td><input name="username"
                            value={this.state.username}
                            onChange={this.handleChange} /></td>
                    </tr>

                    <tr>
                        <th><Button clickHandler={this.ClickHandle} /><br /></th>
                    </tr>
                </table>
                <b>Users Starting with {this.state.username} </b>
                <ShowBook users={this.state.users} />
                </div>

        )

    }
}




export default UserGet;

