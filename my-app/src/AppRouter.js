import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import UserAdd from "./UserAdd";
import UserDelete from "./UserDelete.js";
import UserGet from "./UserGet.js"
import BookAdd from "./BookAdd";
import BookDelete from "./BookDelete.js";
import BookGet from "./BookGet.js"
import AuthorAdd from "./AuthorAdd";
import AuthorDelete from "./AuthorDelete.js";
import AuthorGet from "./AuthorGet.js"
import LoginForm from "./Example7.js"
import Links from "./Links";
import Links2 from "./Links2";
import Links3 from "./Links3";
import LinksMain from "./LinksMain";
import AddWishList from "./AddWishList";


const AppRouter = () => (
    <Switch>
        <Route exact path="/" render={()=> <Redirect replace to="LinksMain"/>}/>
        <Route path="/AddWishList" componen={AddWishList} />
        <Route path="/links" component={Links} />
        <Route path="/links2" component={Links2} />
        <Route path="/links3" component={Links3} />
        <Route path="/LinksMain" component={LinksMain} />
        <Route path="/useradd" component={UserAdd} />
        <Route path="/userdelete" component={UserDelete} />
        <Route path="/showuser" component={UserGet} />
        <Route path="/bookadd" component={BookAdd} />
        <Route path="/bookdelete" component={BookDelete} />
        <Route path="/showbook" component={BookGet} />
        <Route path="/authoradd" component={AuthorAdd} />
        <Route path="/authordelete" component={AuthorDelete} />
        <Route path="/showauthor" component={AuthorGet} />
        <Route path="/Login" component={LoginForm} />
        </Switch>
);

export default AppRouter;