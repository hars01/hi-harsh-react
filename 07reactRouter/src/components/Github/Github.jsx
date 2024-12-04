import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



function Github() {
    //useLoaderData ke through data load karna
    const data = useLoaderData()
    
    //Fetch kar data ko load karna aur dikhane ka tarika 1

    // const [data, setData] = useState([])
    // // API Fetch kar rahe hai
    //    useEffect(() => {
    //          fetch("https://api.github.com/users/hars01")
    //          .then(response => response.json())
    //          .then(data => {
    //             console.log(data);
    //             setData(data)
    //          })
    //    }, [])
    return (
         <div className="text-center m-4 bg-slate-900 text-gray-50 text-3xl p-4">Github Followers : {data.followers}
         <img src={data.avatar_url} alt="Git Picture" width={300} />
         </div>
    )
}

export default Github

//Fetch kar data ko load karna aur dikhane ka tarika 2
export const githubInfoLoader = async () => {
    const response=await fetch("https://api.github.com/users/hars01")
    return response.json();
}