import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const defaultValue = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: ''
}

const UsersForm = ({ getAllUsers, updateInfo, setUpdateInfo }) => {

  useEffect(() => {
    if (updateInfo) {
      //este reset(updateInfo) se utiliza para pintar la 
      //informacion de los user de UserList que pasamos por
      //updateInfo 
      reset(updateInfo)
    }
  }, [updateInfo])


  const createUser = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
    reset(defaultValue)
  }
  const { register, handleSubmit, reset } = useForm()

  const updateUser = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const submit = (data) => {
    if (updateInfo) {
      //Update user
      updateUser(data)
      setUpdateInfo()
    } else {
      //Create user
      createUser(data)
    }
    reset(defaultValue)
  }

  return (
    <div className='formCont'>
      <form onSubmit={handleSubmit(submit)}>
        <div className='form'>
          <div className='infoformbox'>
            <li className='firstname'>
              <label htmlFor="first_name">First_name:</label>
              <input placeholder='  type your main name' {...register("first_name")} type="text" id='first_name' />
            </li>
            <li className='lastname'>
              <label htmlFor="last_name">Last_name:</label>
              <input placeholder="  type your father's last name" {...register("last_name")} type="text" id='last_name' />
            </li>
            <li className='email'>
              <label htmlFor="email">Email:</label>
              <input placeholder='  example: user@mail.com' {...register("email")} type="text" id='email' />
            </li>
            <li className='password'>
              <label htmlFor="password">Password:</label>
              <input placeholder='  type more than 3 characters' {...register("password")} type="text" id='password' />
            </li>
            <li className='birthday'>
              <label htmlFor="birthday">Birthday:</label>
              <input placeholder='  example: year-month-day' {...register("birthday")} type="text" id='birthday' />
            </li>
          </div>
          <div className='btnBox'>
            <button className='btnForm'> {updateInfo ? "Update User Data" : "Create User Data" } </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UsersForm