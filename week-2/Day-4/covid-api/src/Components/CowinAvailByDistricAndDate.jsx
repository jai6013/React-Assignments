import { useState } from "react";
import axios from 'axios'

const initState = {
  district_id: "",
  date: "",
};
export const SearchAvail = () => {
  const [details, setDetails] = useState(initState);
  const [data,setData] = useState([])
  const { district_id, date } = details;

  const handleChange = (e) => {
      const {name,value} = e.target
      setDetails({
          ...details,
          [name]:value
        })
  }
  const handleSubmit = () => {
      console.log(district_id,date)
    var config = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
    setData(response.data.sessions);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(data)
  return (
    <>
    <h2>Search vaccines availabilty by district pin</h2>
        
      <input
        type="text"
        name="district_id"
        value={district_id}
        placeholder="Enter district"
        onChange={handleChange}
        />
      <input 
        onChange={handleChange}
      type="text" name="date" value={date} placeholder="Enter date" />
      <button onClick={handleSubmit}>search</button>
      <br />
      <div>
        {data.map((item)=>{
            return <div>{item.name}</div>
        })}
        </div>
    </>
  );
};
