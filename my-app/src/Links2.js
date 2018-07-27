import React, {Component} from "react";
import { Link } from 'react-router-dom'

class Links2 extends Component{
    render(){
        return(
            <div className="Links2">
            <b><Link to={"/bookadd"}>Add Book</Link><br/></b>
            <b><Link to={"/bookdelete"}>Delete Book</Link><br/></b>
            <b><Link to={"/showbook"}>Search Book</Link><br/></b>
            <b><Link to={"/LinksMain"}>Back Page</Link><br/></b>
            </div>
        
        );
    }
}
export default Links2;