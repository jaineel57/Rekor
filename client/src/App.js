import './App.css';
import LoginPage from './components/Login/LoginPage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import StudentHome from './components/Student/StudentHome'
import Teacher from './components/Teacher/Teacher'
import Principal from './components/Principal/Principal';


function App() {
 
  return (
    <Router>
    <div className="App">
     
      <Route path="/login" component={LoginPage}/>
      <Route path="/student" component={StudentHome}/>
      <Route path="/teacher" component={Teacher}/>
      <Route path="/principal" component={Principal}/>
    </div>
    </Router>
  );
}

export default App;
