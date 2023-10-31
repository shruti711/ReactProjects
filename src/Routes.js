import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import './Header.css'

function RootLayout() {
    return (
        <>
            <div className="header">
                <div className="icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RpnBQL3MRbdJMmXLYOCHeTrYNW6IqPkigQ&usqp=CAU" width={30} height={30} alt={'s-site'} />
                </div>

                <div className="routes">
                    <Link to={`udemy/filterTable`}>Filter Table</Link>
                    <Link to={`udemy/AddTwoNumber`}>Add Two Number</Link>
                    <Link to={`udemy/FetchData`}>Fetch Data</Link>
                    <Link to={`udemy/Parent`}>Parent</Link>
                </div>

            </div>
            <Outlet />
        </>

    )
}

export default RootLayout;