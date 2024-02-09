import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Advices from './pages/Investigations'
import Support from './pages/Support'
import Profile from './pages/Profile'
import { Registration } from './pages/Registration'
import { Login } from './pages/Login'
import Accounts from './pages/Accounts'
import Surveys from './pages/Surveys'
import Diseases from './pages/Diseases'
import Investigations from './pages/Investigations'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="investigations" element={<Investigations />} />
                    <Route path="diseases" element={<Diseases />} />
                    <Route path="surveys" element={<Surveys />} />
                    <Route path="accounts" element={<Accounts />} />
                    <Route path="support" element={<Support />} />
                </Route>
                <Route path="/registration" element={<Registration />} />
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
