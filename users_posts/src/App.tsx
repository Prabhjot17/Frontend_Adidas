import "./App.css"
import Header from "./components/Header";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts"; 
import Navbar from "./components/Navbar";
export interface AppProps {
}
function App(props: AppProps) {
  const links = [
    { text: 'Users', href: '/' },
    { text: 'All Posts', href: '/posts' },
   
  ];
 
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar title="Navbar" links={links} />
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
