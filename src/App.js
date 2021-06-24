import React, { useState } from 'react'

import AddUsers from './components/Users/AddUsers'
import UserList from './components/Users/UserList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((previousList) => {
      return [
        ...previousList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  )
}

export default App
