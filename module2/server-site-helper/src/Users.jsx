import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const data = useLoaderData();
    return (
        <div>
            <div>
                <h1>{data.length}</h1>
                {data.map(singledata=> <h1 key={singledata._id}>{singledata.name} n {singledata.email}</h1>)}
            </div>
        </div>
    );
};

export default Users;