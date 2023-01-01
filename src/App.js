import './App.css';
import { Route, Switch } from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <div className="App">
        <>      
        <Switch>
        <Route path='/' exact component={LoginPage}/>
          <Route path='/LoginPage' exact component={LoginPage}/>
          <Route path='/HeaderArea' component={HeaderArea}/>
        </Switch>
        </>
      
    </div>
  );
}

export default App;
