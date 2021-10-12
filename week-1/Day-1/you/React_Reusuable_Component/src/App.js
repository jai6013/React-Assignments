import './App.css';
import { Card } from './Components/Card';

function App() {
  const data1={
    img:"https://as2.ftcdn.net/v2/jpg/02/41/95/11/500_F_241951113_jIcZTSIbsC14iYUN0ZspZ7L4x6yO3sTc.jpg",
    para1:"There are approximately",
    heading: "3.04 Billion",
    para2: "active social media users Worldwide"
  }
  const data2={
    img:"https://cdn-icons.flaticon.com/png/512/3137/premium/3137807.png?token=exp=1634061245~hmac=1e45aa391810cc3f51613c7e40f556df",
    para1:"There are approximately",
    heading: "3.04 Billion",
    para2: "active social media users Worldwide"
  }
  const data3={
    img:"https://cdn-icons-png.flaticon.com/512/602/602182.png",
    para1:"There are approximately",
    heading: "3.04 Billion",
    para2: "active social media users Worldwide"
  }
  const data4={
    img:"https://cdn-icons.flaticon.com/png/128/3118/premium/3118931.png?token=exp=1634061435~hmac=65f30cbc21930a1c31376946bcc8f0c2",
    para1:"There are approximately",
    heading: "3.04 Billion",
    para2: "active social media users Worldwide"
  }
  const data5={
    img:"https://cdn-icons.flaticon.com/png/512/2008/premium/2008302.png?token=exp=1634061490~hmac=8e7a2363a8d229b15269d31e3305c9a4",
    para1:"There are approximately",
    heading: "3.04 Billion",
    para2: "active social media users Worldwide"
  }
  const data6={
    img:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    para1:"There are approximately",
    heading: "3.04 Billion",
    para2: "active social media users Worldwide"
  }


  return (
    <div className="App">
     <h1>General Social Media Marketing Stats</h1>
     <div className="card_main">

    <Card data={data1}/>
    <Card data={data2}/>
    <Card data={data3}/>
    <Card data={data4}/>
    <Card data={data5}/>
    <Card data={data6}/>
     </div>
      
    </div>
  );
}

export default App;
