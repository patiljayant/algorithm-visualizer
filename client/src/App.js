import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import BruteForce from './components/BruteForce.js';
import Home from './components/Home.js';
import {DataContext} from './contexts/dataContext.js'
import NotFound from './components/NotFound.js';
import GetData from './components/GetData.js'

function App() {
  useEffect(() => {
    axios.get('/api/apiRoutes/')
     .then(res => {
         setdata(res.data);
     });
  }, []);

  const [data, setdata] = useState([{
    name:"",
    code:[{
        language:"",
        code:""
    }],
    info:"",
    example:``,
    timec:"",
    spacec:""
  }]); 


  return (
    <Router>
      <div className="App">
      
      <DataContext.Provider  value = {data}>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/brute-force/:algo" render={(props)=> GetData(props.match.params.algo).url ? (<BruteForce props={props} />):(<Redirect to='/*'/>)} />
          <Route path = "/*"  component={NotFound} />
        </Switch>
      </DataContext.Provider>
    </div>
    </Router>
  );
}

export default App;
