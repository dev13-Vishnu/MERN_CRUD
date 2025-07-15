import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './addUser.css'
import axios from 'axios'
const AddUser = () => {
    const users = {
        name: "",
        email: "",
        addreass: ""
    }
    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        setUser({...user,[name]: value});
    }
    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/user',user)
        .then((response) => {
            console.log("User created Successfully.")
            navigate('/')
        }).catch((error)=> {
            console.log(error);
        })
    }
  return (
    <div className='addUser'>
        <Link to='/' type="button" class="btn btn-secondary">
            <i class="fa-solid fa-backward"></i> Back
        </Link>
        <h3>Add New User</h3>
        <form 
        onSubmit={submitForm}
        className="addUserForm">
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" 
                    id='name'
                    onChange={inputHandler}
                    name='name'
                    autoComplete='off'
                    placeholder='Enter Your Name...'
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="name">Email</label>
                <input type="text" 
                    id='email'
                    onChange={inputHandler}
                    name='email'
                    autoComplete='off'
                    placeholder='Enter Your email...'
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="name">Address</label>
                <input type="text" 
                    id='address'
                    onChange={inputHandler}
                    name='address'
                    autoComplete='off'
                    placeholder='Enter Your Addrrss...'
                />
            </div>
            <div className="inputGroup">
            <button type="submit" class="btn btn-primary">Submit</button>

            </div>
        </form>

    </div>
  )
}

export default AddUser
