import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const deleteHandler = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'delete'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
  const data = useLoaderData();
  return (
    <div>
      <div>
        <h1>{data.length}</h1>
        {
        data.map(singledata => 
          <div key={singledata._id}>
            {singledata.name} : {singledata.email} <button onClick={()=>deleteHandler(singledata._id)}>x</button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
