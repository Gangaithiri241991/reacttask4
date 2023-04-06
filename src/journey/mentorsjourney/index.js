import React from "react";
import {Outlet,Link} from "react-router-dom";
import Appheader from "../../component/appheader";
export default function index(){
    const routes = [
        {
          id: "journey-1",
          label: "Create Mentors",
          route: "/mentor/createm",
        },
        {
          id: "journey-2",
          label: "Manage Mentor",
          route: "/mentor/managem",
        },
      ];




    return(
        <div >
            
            <Appheader journeyname="mentorsJourney" routes={routes}/>
        <Outlet />
        </div>
    )
}