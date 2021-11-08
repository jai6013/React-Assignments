import { GET_DATA } from "./actionTypes"
import axios from "axios";

const initState = {
    data:[]
}

export const reducer = (state = initState,action) =>{
    switch(action.type){
        case GET_DATA: 
        var data;
        var config = {
            method: "get",
            url: "https://rickandmortyapi.com/api/character",
            headers: {},
          };
      
          axios(config)
            .then(function (response) {
              data = response.data.results
            })
            .catch(function (error) {
              console.log(error);
            });
        return {...state,
          data:data}
        default :
        return state
    }
}