import React from "react";
import {Outlet,Link} from "react-router-dom";
import Appheader from "../../component/appheader";
export default function index(){
    const routes = [
        {
          id: "journey-1",
          label: "Create Student",
          route: "/students/creates",
        },
        {
          id: "journey-2",
          label: "Manage Student",
          route: "/students/manages",
        },
      ];




    return(
        <div>
            <Appheader journeyname="students journey" routes={routes}/>
            <Outlet/>
        </div>

    )
}