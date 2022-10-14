import { Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { HomePage, AboutPage, LoginPage, NavBar } from './index';

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <NavBar/>
            <hr />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='/*' element={<Navigate to='/about'/>}/>
                {/* <Route path='/*' element={<HomePage/>}/> */}
            </Routes>
        </UserProvider>
    )
}
