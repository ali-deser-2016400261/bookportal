import React from 'react';
import * as ProjectBookAPI from './ProjectBookAPI'
import './SearchBooks.css'


class WishListButton extends React.Component {

    render() {
        //renders a button that displays the state count
        return (<button

            onClick={() => { this.props.clickHandler() }}>
            <b>ADD WISHLIST</b>
        </button>
        )
    }


}



class AddWishList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            userid:"",
            bookid: "",

 
        };
        this.handleChange = this.handleChange.bind(this)
        this.ClickHandle = this.ClickHandle.bind(this)
   
    }

    ClickHandle() {

        ProjectBookAPI.addWishlistt(this.state.userid,this.state.bookid);

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
                        <th><WishListButton clickHandler={this.ClickHandle} /><br /></th>
                    </tr>
                </table>
               
                </div>

        )

    }
}




export default AddWishList;

