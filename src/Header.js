import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import './Header.css';
// import ParentComponent from './ClassComponents/ParentComponent';
// import ParentComponents from './FunctionalComponent/ParentComponents';
import Parent from './Udemy/Components/Parent';
import FilteredTable from './Udemy/FilteredTable';
import AddTwoNumber from './Udemy/Components/AddTwoNumber';
import FetchData from './Udemy/Components/FetchData';
import ErrorPage from './Error';
import RootLayout from './Routes'

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout />, errorElement: <ErrorPage />,
        children: [
            { path: 'udemy/filterTable', element: <FilteredTable /> },
            { path: 'udemy/AddTwoNumber', element: <AddTwoNumber /> },
            { path: 'udemy/FetchData', element: <FetchData /> },
            { path: 'udemy/Parent', element: <Parent /> },
        ]
    }
])

function Header() {
    return (<RouterProvider router={router} />)
}

export default Header;