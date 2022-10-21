import React, {useContext} from 'react'
import { UserContext } from './user'

export default function Home() {
   const { user } = useContext(UserContext)

  if  (!user || user.error) {
    return(<h1> Please Navigate to Login or Sign Up Form</h1>)
  } else{
      return (
        <div>
          <h2>Home Page for {user.username}</h2>
          <h4>{user.bio}</h4>
        </div>
      )
  }
}

