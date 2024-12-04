import React from "react";
import { useParams } from "react-router-dom";


function User() {
       const {userid} = useParams()
    return (
         <div className="bg-slate-900 text-gray-50 text-3xl p-4">User : {userid}</div>
    )
}

export default User