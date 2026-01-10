import { Routes, Route } from "react-router-dom";
import Access from './Access'
import AppLayout from "./AppLayout";

function AppRouters () {
    return (
        <>
        <Routes>
            <Route path="/" element={<Access/>} />
            <Route path="/home/*" element={<AppLayout/>} />
        </Routes>
        </>
    )
}
export default AppRouters;