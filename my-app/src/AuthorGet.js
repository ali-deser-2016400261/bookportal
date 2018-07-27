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

    return (<div class="row">{props.authors.map(function (item, i) {
        return <ListItem key={i} item={item} />
    }


    )
    }</div>
    )


}


class AuthorGet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            name: "",
            surname:"",
            authors:[],
            abc:""
        };
        this.handleChange = this.handleChange.bind(this)
        this.ClickHandle = this.ClickHandle.bind(this)
   
    }

    ClickHandle() {

        ProjectBookAPI.getAuthor(this.state.name,this.state.surname).then((authors) =>{
            if(!authors || authors.hasOwnProperty('error')){
                this.setState({authors:[], first:false})
            } else{
                this.setState({authors:authors})
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
                        <th>Name:</th>
                        <td><input name="name"
                            value={this.state.name}
                            onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <th>Surname:</th>
                        <td><input name="surname"
                            value={this.state.surnname}
                            onChange={this.handleChange} /></td>
                    </tr>

                    <tr>
                        <th><Button clickHandler={this.ClickHandle} /><br /></th>
                    </tr>
                </table>
                <b>Authors Starting with {this.state.name} </b>
                <ShowBook authors={this.state.authors} />
                </div>

        )

    }
}




export default AuthorGet;

