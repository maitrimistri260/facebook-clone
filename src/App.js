import React from "react";
import './App.css';
import Feed from "./components/Body/Feed/Feed";
import Sidebar from "./components/Body/Sidebar/Sidebar";
import Widget from "./components/Body/Widgets/Widget";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue();
  //BEM naming convention
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}



    </div>
  );
}

export default App;
