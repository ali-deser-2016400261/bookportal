import React from 'react';
import * as ProjectBookAPI from './ProjectBookAPI'
import './SearchBooks.css'
import AddWishList from './AddWishList'


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
         
        <b>{props.item.name} </b><br/>
        <AddWishList userid bookid={props.item.bookid}/>
        
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

    return (<div class="row">{props.books.map(function (item, i) {
        return <ListItem key={i} item={item} />
    }


    )
    }</div>
    )


}


class BookGet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            userid:2,
            name: "",
            surname:"",
            authors:[],
            abc:""
        };
        this.handleChange = this.handleChange.bind(this)
        this.ClickHandle = this.ClickHandle.bind(this)
   
    }

    ClickHandle() {

        ProjectBookAPI.getBook(this.state.name).then((books) =>{
            if(!books || books.hasOwnProperty('error')){
                this.setState({books:[], first:false})
            } else{
                this.setState({books:books})
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
                        <th><Button clickHandler={this.ClickHandle} /><br /></th>
                    </tr>
                </table>
                <b>Books Starting with {this.state.name} </b>
                <ShowBook books={this.state.books} userid={this.state.userid}/>
                </div>

        )

    }
}




export default BookGet;

