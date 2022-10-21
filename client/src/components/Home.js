import React from 'react'
import { UserContext } from './user'

export default function Home() {
   const { user } = useContext(UserContext)
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

