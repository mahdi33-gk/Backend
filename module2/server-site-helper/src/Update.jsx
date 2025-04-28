import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data =useLoaderData();
    const submitHandler = e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email = form.email.value;
    }
    return (
        <div>
            this is update{data.name}
            <form onSubmit={submitHandler}>
                <input type="text" name="name" defaultValue={data.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={data.email} id="" />
                <br />
                <input type="submit" value="Submit Now" />
            </form>
        </div>
    );
};

export default Update;