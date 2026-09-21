import { Outlet } from 'react-router-dom';
import Header from "../Components/Header/Header.tsx";
export default function RootLayouts() {
    return (
        <>
        <Header />
            <Outlet />
        </>
    );
}