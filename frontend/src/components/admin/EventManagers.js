import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

import { deleteEventManagers, getAllEventManagers } from '../apicalls/auth/eventcalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Base from '../basic/Base'

function EventManagers() {
   
    const [managers,setManagers]=useState([]);
   const user=JSON.parse(localStorage.getItem("user"));
   const token=localStorage.getItem("jwt");
 
    const  getManagers=()=>{
        getAllEventManagers(user._id,token).then(user=>{
            if(user){
                setManagers(user);
            }
        })
    }
    useEffect(() => {
        
       getManagers();
       // eslint-disable-next-line
    }, [])
    const deleteEvent=(id)=>{
        deleteEventManagers(id,user._id,token).then(res=>{
           
            if(res.message==="Deleted Successfully!"){

            const newmng=managers.filter(mng=>{
                return mng._id!==id
            })
            setManagers(newmng);
            
            toast(res.message);
        }
        else{
            toast.error(res.error)

        }
        })
    }
    const adminLeftSide=()=>{
        return (
            <div class="card text-white  mb-3 offset-1" >
  <div class="card-header bg-success">Choose Any Option</div>
  <div class="card-body ">
  <ul class="list-group">
  <li class="list-group-item list-group-item-light"><Link to="/admin/eventManage/create" className="nav-link text-success"> Create Event Manager</Link></li>
  <li class="list-group-item list-group-item-light"><Link to="/admin/eventManage/manage" className="nav-link text-success"> Manage Event Manager</Link></li>
  <li class="list-group-item list-group-item-light"><Link to="/admin/events/create" className="nav-link text-success"> Create Events</Link></li>
  <li class="list-group-item list-group-item-light"><Link to="/admin/events/manage" className="nav-link text-success">Manage Events</Link></li>
  <li class="list-group-item list-group-item-light"><Link to="/admin/students/event" className="nav-link text-success"> Manage Students</Link></li>

  </ul>
   
  
  </div>
</div>
        )
    }
    const adminRight=()=>{
        return(
            <div class="card offset-1"  >
            <div class="card-header bg-dark text-white ">
             Event Managers detail
            </div>
            {managers.map(users=>{
                return(
                    <ul class="list-group list-group-flush m-3 ">
                    <li class="list-group-item spanner" >Name <span className="badge badge-warning mr-3">{users?.firstname} {users?.lastname}</span> </li>
                    <li class="list-group-item spanner ">Rollno: <span className="badge badge-success mr-3">{users?.rollno} </span> </li>
                    <li class="list-group-item spanner"> Contact No: <span className="badge badge-danger mr-3"> {users?.contact_no} </span> </li>
                    <li class="list-group-item spanner"> Allocated Event: {users?.allocatedEvent?.map(evnts=>{
                        return <li class="list-group-item spanner">{evnts.name}</li>
                    })}  </li>
                    <li class="list-group-item"> <button type="button" class="btn btn-danger" onClick={()=>{deleteEvent(users?._id)}}>Delete</button> </li>
                  </ul>

                )
            })}
          
          </div>
        )

    }
    return (
        <Base title="Welcome to the admin dashboard">
            <ToastContainer/>
            <div class="container bg-info">
                <div className="row p-4 ">
                <div class="col-sm-12 col-lg-4">
                {adminLeftSide()}   
                    </div>
                    <div class="col-sm-12 col-lg-8">
                {adminRight()}   
                    </div>
                    </div>
            </div>
        
        </Base>
    )
}

export default EventManagers
