import HomePage from "../Components/HomePage"
import ActionAreaCard from "../Components/ShowMore"

const Route = () =>{
    return(
        <>
        <Route exact path ="/" >
            <HomePage/>
        </Route>
        <Route exact path = "/:id">
            <ActionAreaCard/>
        </Route>
        </>
    )
}