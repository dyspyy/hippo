import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Advices from './pages/Advices'
import Support from './pages/Support'
import Profile from './pages/Profile'
import { Registration } from './pages/Registration'
import { Login } from './pages/Login'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="advices" element={<Advices />} />
                    <Route path="support" element={<Support />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/registration" element={<Registration />} />
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
