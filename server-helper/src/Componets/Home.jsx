import React, { useEffect, useState } from 'react';

const Home = () => {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[])
    const submitHandler = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const user = {name,email}
        console.log(user)
    }
    return (
        <div>
            <h1>Welcome home {user.length}</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" name="name" id="" />
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                {user.map(single=> <p>{single.Roll}</p>)}
            </div>
        </div>
    );
};

export default Home;