import './App.css';
import { MainBox } from './Components/Problem1';
import { Problem2 } from './Components/Problem2';
import * as React from 'react';
// import { makeStyles } from '@mui/styles';
import { Problem3 } from './Components/Problem3';
import { Problem4 } from './Components/Problem4';

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: 'yellow',
//     color: "white",
//   },
// });

function App() {
  const problem = 4
  // const classes = useStyles();
 return (
  //   <div className = {classes.root}>
  //     < Problem2/>
  //   </div>
  // <div>
  //   <Problem3/>
  // </div>
  <div>
    {problem === 1? <MainBox/>:problem === 2? <Problem2/>:problem===3?<Problem3/>:problem===4?<Problem4/>:null}
  </div>
  );
}

export default App;
