import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Users from './Components/Users/Users.jsx';
import AddUsers from './Components/AddUsers/AddUsers.jsx';
import Profile from './Components/Profile/Profile.jsx';
import UpdateUsers from './Components/UpdateUsers/UpdateUsers.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  let routes = createHashRouter([
    { index:true, element: <Login /> } ,
    { path:"login", element: <Login /> } ,
    {path:"dashboard" , element:<Layout/>,children:[
      {index:true , element:<Home/> } ,
      {path:"user-list" , element:<Users/>},
      {path:"user/:id" , element:<UpdateUsers/>},
      {path:"add-user" , element:<AddUsers/>},
      {path:"profile" , element:<Profile/>},
  
    ]}
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
