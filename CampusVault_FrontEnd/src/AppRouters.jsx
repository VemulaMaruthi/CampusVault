import { Routes, Route } from "react-router-dom";
import Access from './Access'
import App from './App'

function AppRouters () {
    return (
        <>
        <Routes>
            <Route path="/" element={<Access/>} />
            <Route path="home" element={<App/>} />
        </Routes>
        </>
    )
}
export default AppRouters;