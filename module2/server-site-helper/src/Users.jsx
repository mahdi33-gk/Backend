import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loaderUser = useLoaderData();
    const [user,setUser] =useState(loaderUser);
  const deleteHandler = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount>0){
            alert('ok donne deletion.')
            const remaining = user.filter(singleuser=> singleuser._id != _id);
            setUser(remaining)
        }
      });
  };
 
  return (
    <div>
      <div>
        <h1>{user.length}</h1>
        {user.map((singledata) => (
          <div key={singledata._id}>
            {singledata.name} : {singledata.email}{" "}
            <Link to={`/update/${singledata._id}`}>
            <button>update</button>
            </Link>
            <button onClick={() => deleteHandler(singledata._id)}>x</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
