import { Fragment, useState, useEffect } from 'react';

function FetchData() {
    const [user, setUser] = useState({});

    const url = "https://jsonplaceholder.typicode.com/users/1";

    const getUserData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setUser(jsonData);
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <Fragment>
            <h1>User Data</h1>
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Website:</strong> {user.website}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
                <strong>Phone:</strong> {user.phone}
            </p>
            **************************
        </Fragment>
    )
}

export default FetchData;