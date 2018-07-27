import React from 'react';
import * as ProjectBookAPI from './ProjectBookAPI'
import './SearchBooks.css'


class Button extends React.Component {

    render() {
        //renders a button that displays the state count
        return (<button

            onClick={() => { this.props.clickHandler() }}>
            <b>Delete</b>
        </button>
        )
    }


}



function ListItem(props) {

    return (<div class="column">
         
        <b>{props.item.name} {props.item.surname}</b><br/>
    
        
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


class UserDelete extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            id:"",
            name: "",
            surname:"",
 
        };
        this.handleChange = this.handleChange.bind(this)
        this.ClickHandle = this.ClickHandle.bind(this)
   
    }

    ClickHandle() {

        ProjectBookAPI.deleteUser(this.state.id);

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
                        <th>Id:</th>
                        <td><input name="id"
                            value={this.state.id}
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




export default UserDelete;

