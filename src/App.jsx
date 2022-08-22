import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  //getting the Users displayed
  const getAllUsers = () => {
    const URL = `https://users-crud1.herokuapp.com/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  
  return (
    /*haciendo interacion en el array de la api para mostrar
     los usuarios dinamicamente*/
    <div className="App">
      <div className='contTitle'>
        <h1>Users's CRUD</h1>
      </div>
      <UsersForm 
      getAllUsers= {getAllUsers}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}
      />
       
      <div className='contCards'>
        {
          users && users.map(user => (
            <UsersList
              user={user}
              key={user.id}
              getAllUsers= {getAllUsers}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
