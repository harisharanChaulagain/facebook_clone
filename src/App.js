import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
import MainArea from './MainArea/MainArea';

function App() {
  return (
    <div className="App">
        <Router>      
        <Switch>
        <Route path='/' exact component={LoginPage}/>
          <Route path='/LoginPage' exact component={LoginPage}/>
          <Route path='/HeaderArea' component={HeaderArea}/>
          <Route path='/MainArea' component={MainArea}/>
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
