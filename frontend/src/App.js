import React, { useReducer,createContext, useContext,useEffect } from 'react'
import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom';
import Home from './components/pages/Home';
import StudentSignup from './components/pages/StudentSignup';

import './App.css';
import {initialState, reducer} from './components/reducers/useReducers';
import StudentLogin from './components/pages/StudentLogin';
import Events from './components/pages/Events';
import AdminRoute from './helper/AdminRoutes';

import CreateEventManager from './components/admin/CreateEventManager';

import AdminDashboard from './components/admin/AdminDashboard';
import EventManagers from './components/admin/EventManagers';
import CreateEvents from './components/admin/CreateEvent';
import ManageEvents from './components/admin/ManageEvents';
import EventRoute from './helper/EventRoutes';
import EventManagerDashboard from './components/eventManager/EventMangerDashboard';
import ManageStudents from './components/eventManager/ManageStudents';
import EventsDetail from './components/pages/EventsDetail';
import Cart from './components/pages/Cart';

import AdminManageStudents from './components/admin/AdminManageStudents';

import Profile from './components/pages/Profile';
import AboutUs from './components/pages/AboutUs';



export const UserContext=createContext();

const Routes=()=>{
 const {dispatch}=useContext(UserContext);
 
 const history=useHistory();
useEffect(() => {
    window.scrollTo(0,0);
    const user=JSON.parse(localStorage.getItem("user"));

    if(user){
        
        dispatch({type:'USER',payload:user});
        
        const localcart=JSON.parse(localStorage.getItem("cart"));
        if(localcart){
            dispatch({type:'ADDTOCART',payload:localcart}); 
        }
    }
        
       
     else{
         console.log("yes");
        history.push('/studentlogin')
      }
}, [dispatch,history])
    return(
        <Switch>
    <Route exact path="/">
    <Home/>
  </Route>
    <Route path="/studentsignup" exact component={StudentSignup}/>
    <Route path="/studentlogin" exact component={StudentLogin}/>
    <Route path="/events" exact component={Events}/>
    <Route path="/cart" exact component={Cart}/>
    <Route path="/events/:eventid" exact component={EventsDetail}/>
    <Route path="/profile" exact component={Profile}/>
    <Route path="/about-us" exact component={AboutUs}/>
    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
    <AdminRoute path="/admin/eventManage/create" exact component={CreateEventManager}/>
    <AdminRoute path="/admin/eventManage/manage" exact component={EventManagers}/>
    <AdminRoute path="/admin/create/eventmanager" exact component={CreateEventManager}/>
    <AdminRoute path="/admin/events/create" exact component={CreateEvents}/>
    <AdminRoute path="/admin/students/event" exact component={AdminManageStudents}/>
    
    <AdminRoute path="/admin/events/manage" exact component={ManageEvents}/>

    <EventRoute path="/eventManager/dashboard" exact component={EventManagerDashboard}/>
    <EventRoute path="/eventManager/manage" exact component={ManageStudents}/>
    
    </Switch>
    )
}
function App() {
 
    const [state,dispatch]=useReducer(reducer,initialState);
    
  
    return (
        <UserContext.Provider value={{state,dispatch }}>
        <BrowserRouter>
       
           <Routes/>
       
        </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;
