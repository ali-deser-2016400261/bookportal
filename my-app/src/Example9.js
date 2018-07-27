import React from 'react';
import * as BooksAPI from './BooksAPI'
import './SearchBooks.css'


class Button extends React.Component {

    render() {
        //renders a button that displays the state count
        return (<button

            onClick={() => { this.props.clickHandler() }}>
            <b>Submit</b>
        </button>
        )
    }


}


function ListItem(props) {

    return (<div class="column">
         
        <b>{props.item.title}</b><br/>

        <img src={props.item.imageLinks.thumbnail} />
       {/*  {props.item.authors}  */}
      <Authors authors={props.item.authors}/>
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


class SearchBooks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            name: "",
            authors:[],
        };
        this.handleChange = this.handleChange.bind(this)
        this.ClickHandle = this.ClickHandle.bind(this)
   
    }

    ClickHandle() {

        BooksAPI.search(this.state.name, 100).then((books) => {
            if (!books || books.hasOwnProperty('error')) {
                this.setState({ books: [] });
            } else {
                this.setState({ books: books });
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
                <ShowBook books={this.state.books} />
                </div>

        )

    }
}




export default SearchBooks;

