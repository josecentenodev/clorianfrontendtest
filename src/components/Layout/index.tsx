import { ReactNode } from 'react';
import NavBar from "../Navbar";

interface PropsLayout {
    children?: ReactNode;
}

const Layout = ({children}: PropsLayout) => {
    
    return (
        <>
        <NavBar />
        <div className='container'>{children}</div>
        </>
    )
}

export default Layout