import React, {Component} from "react";
import { Link } from 'react-router-dom'

class LinksMain extends Component{
    render(){
        return(
            <div className="LinksMain">

            <h1><b><Link to={"/links"}>User İşlemleri</Link><br/></b></h1>
            <h1><b><Link to={"/links2"}>Book İşlemleri</Link><br/></b></h1>
            <h1><b><Link to={"/links3"}>Author İşlemleri</Link><br/></b></h1>
            </div>
        
        );
    }
}
export default LinksMain;