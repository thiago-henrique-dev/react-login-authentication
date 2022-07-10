import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

const HomePage = () => {
    const { authenticated,  logout } = useContext(AuthContext);
    const handleLoggout = () => {
        logout()
    }
    return (
        <>
          <h1>HomePage</h1>
          <p>{String(authenticated)}</p>
          <button onClick={handleLoggout}>Logout</button>
        </>
    )
}

export default HomePage;