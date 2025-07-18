import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import './update.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const Update = () => {
    const users = {
        name: "",
        email: "",
        address: ""
    }
    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const {id} = useParams();

    const inputHandler = (e) => {
        const {name, value} = e.target;
        // console.log(name, value)
        setUser({...user,[name]: value});
    }
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
            
            setUser(response.data.user)
        }).catch((error) => {
            console.log(error);
        })
    },[id])
    const submitForm = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/user/${id}`,user)
        .then((response) => {
            console.log("message:",response.data.message)
            toast.success(response.data.message,{position:"top-right"})
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
        <h3>Update User</h3>
        <form 
        onSubmit={submitForm}
        className="addUserForm">
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" 
                    id='name'
                    value= {user.name}
                    onChange={inputHandler}
                    name='name'
                    autoComplete='off'
                    
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="name">Email</label>
                <input type="text" 
                    id='email'
                    value= {user.email}
                    onChange={inputHandler}
                    name='email'
                    autoComplete='off'
                    
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="name">Address</label>
                <input type="text" 
                    id='address'
                    value= {user.address}
                    onChange={inputHandler}
                    name='address'
                    autoComplete='off'
                    
                />
            </div>
            <div className="inputGroup">
            <button type="submit" class="btn btn-primary">Submit</button>

            </div>
        </form>

    </div>
  )
}

export default Update;
