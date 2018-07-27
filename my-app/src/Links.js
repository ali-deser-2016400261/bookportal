import React, {Component} from "react";
import { Link } from 'react-router-dom'

class Links extends Component{
    render(){
        return(
            <div className="Links">
            <b><Link to={"/useradd"}>Add User</Link><br/></b>
            <b><Link to={"/userdelete"}>Delete User</Link><br/></b>
            <b><Link to={"/showuser"}>Search User</Link><br/></b>
            <b><Link to={"/LinksMain"}>Back Page</Link><br/></b>
            </div>
        
        );
    }
}
export default Links;