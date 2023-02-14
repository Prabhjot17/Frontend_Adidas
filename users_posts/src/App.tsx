import "./App.css"
import Header from "./components/Header";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts"; 
export interface AppProps {
}
function App(props: AppProps) {
 
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Users {...props}/>}/>
        <Route path='/posts' element={<Posts {...props}/>}/>
        <Route path='/posts/:userId' element={<Posts {...props}/>}/>
        <Route>404 Not Found!</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
