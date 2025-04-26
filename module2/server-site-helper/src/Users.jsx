import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  return (
    <div>
      <div>
        <h1>{data.length}</h1>
        {
        data.map(singledata => 
          <div key={singledata._id}>
            {singledata.name} : {singledata.email} <button>x</button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
