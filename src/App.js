import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from "./Feed.js"
import Widgets from "./Widgets.js"
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="App">
      {/* Header */}
      {!user? (<Login/>):
      (
        <>
        <Header/>
      <div className="app_body">
          <SideBar/>
          <Feed/>
          <Widgets/>
      </div>
      </>
      )}
      
      {/* SlideBar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
