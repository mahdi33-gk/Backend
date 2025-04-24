import React, { useEffect, useState } from 'react';

const Home = () => {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[])
    return (
        <div>
            <h1>Welcome home {user.length}</h1>
        </div>
    );
};

export default Home;