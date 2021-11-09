import React from "react";
import HomePage from "../Components/HomePage"
import ActionAreaCard from "../Components/ShowMore"
import { Route, Switch } from "react-router-dom";


const Routes = () =>{

    return(
        <>
        <Route exact path ="/" >
            <HomePage/>
        </Route>

        <Switch>
        <Route exact path = "/:id">
            <ActionAreaCard/>
        </Route>
        </Switch>
        </>
    )
}
export default Routes