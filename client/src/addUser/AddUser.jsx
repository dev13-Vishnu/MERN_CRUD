import React from 'react'
import { Link } from 'react-router-dom'
import './addUser.css'
const AddUser = () => {
  return (
    <div className='addUser'>
        <Link to='/' type="button" class="btn btn-secondary">
            <i class="fa-solid fa-backward"></i> Back
        </Link>
        <h3>Add New User</h3>
        <form action="" className="addUserForm">
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" 
                    id='name'
                    name='name'
                    autoComplete='off'
                    placeholder='Enter Your Name...'
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="name">Email</label>
                <input type="text" 
                    id='email'
                    name='email'
                    autoComplete='off'
                    placeholder='Enter Your email...'
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="name">Address</label>
                <input type="text" 
                    id='address'
                    name='address'
                    autoComplete='off'
                    placeholder='Enter Your Addrrss...'
                />
            </div>
            <div className="inputGroup">
            <button type="button" class="btn btn-primary">Submit</button>

            </div>
        </form>

    </div>
  )
}

export default AddUser
