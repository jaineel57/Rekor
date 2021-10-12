import './App.css';
import LoginPage from './components/LoginPage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Student from './Student'
import Teacher from './Teacher'


function App() {
 
  return (
    <Router>
    <div className="App">
     
      <Route path="/login" component={LoginPage}/>
      <Route path="/student" component={Student}/>
      <Route path="/teacher" component={Teacher}/>
    </div>
    </Router>
  );
}

export default App;
