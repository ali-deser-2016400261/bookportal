import React, {Component} from "react";
import { Link } from 'react-router-dom'

class Links3 extends Component{
    render(){
        return(
            <div className="Links2">
            <b><Link to={"/authoradd"}>Add Author</Link><br/></b>
            <b><Link to={"/authordelete"}>Delete Author</Link><br/></b>
            <b><Link to={"/showauthor"}>Search Author</Link><br/></b>
            <b><Link to={"/LinksMain"}>Back Page</Link><br/></b>
            </div>
        
        );
    }
}
export default Links3;