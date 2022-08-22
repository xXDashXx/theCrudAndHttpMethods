import React from 'react';
import axios from 'axios';

const UsersList = ({ user, getAllUsers, setUpdateInfo }) => {
   
    const deleteUser = () => {
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
          .then(res => {
            console.log(res.data)
            getAllUsers()
          })
          .catch(err => console.log(err))

    }
    const handleUpdateClick = () => {
        setUpdateInfo(user)
    }
    return (
        <div className='card'>
            <div className='name'>
                <span> {`${user["first_name"]} ${user["last_name"]}`}</span>
            </div>
            <hr />
            <div className='email'>
                <span>Email:</span>
                <span> {user.email} </span>
            </div>
            <div className='birthday'>
                <span>Birthday:</span>
                <span> {user.birthday} </span>
            </div>
            <hr />
            <div className='contBtn'>
            <button onClick={deleteUser} className='btn1'>Delete</button>
            <button onClick={handleUpdateClick} className='btn2'>Update</button>
            </div>
        </div>

    )
}

export default UsersList