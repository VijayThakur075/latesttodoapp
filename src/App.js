import logo from './logo.svg';
import './App.css';
import { Form } from './component/Form';
import { User } from './component/User';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { EditUser } from './component/EditUser';


function App() {
  return (
    <div className="App">
      <h1>hhhhhhh</h1>


      <Router>
        <Link to='/user'>user</Link>
        <Link to='/adduser'>Add user</Link>
        
        <Route exact path='/user' component={User} />
        <Route path='/adduser' component={Form} />
        <Route path='/edituser/:id' component={EditUser}/>
      </ Router>


    </div>
  );
}

export default App;
