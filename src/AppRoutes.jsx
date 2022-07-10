import { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import LoginPage from './pages/loginPages';
import HomePage from './pages/HomePage'

import { AuthContext } from './contexts/auth';

const AppRoutes = () => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log('login auth', {email, password})
        setUser({ id: "123", email})
    }
    const logout = () => {
        console.log('logout')
    }
    return(
       <Router>
        <AuthContext.Provider value={{authenticated:
            !!user, user, login, logout
        }}>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<HomePage/>}/>
            </Routes>
        </AuthContext.Provider>
       </Router>
    )
}

export default AppRoutes;