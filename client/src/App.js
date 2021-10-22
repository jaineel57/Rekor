import './App.css';
import LoginPage from './components/Login/LoginPage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import StudentLayout from './components/Student/StudentLayout'
import Teacher from './components/Teacher/Teacher'
import Principal from './components/Principal/Principal';


function App() {
 
  return (
    <Router>
    <div className="App">
     
      <Route path="/login" component={LoginPage}/>
      <Route path="/student" component={StudentLayout}/>
      <Route path="/teacher" component={Teacher}/>
      <Route path="/principal" component={Principal}/>
    </div>
    </Router>
  );
}

export default App;
