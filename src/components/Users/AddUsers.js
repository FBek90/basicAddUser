import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModule from '../UI/ErrorModule'
import classes from './Add.module.css'

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid name',
        message: 'Please enter a valid name and age (non-empty values).',
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter an age (> 0).',
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classProp={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'> Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />
          <label htmlFor='age'> Age</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={userAgeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUsers
