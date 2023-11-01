import { Fragment, useState } from "react"

const FilterTable = () => {

    const refrences = [
        {
            id: 1,
            name: "Shruti",
            email: "shruti@gmail.com",
            mobileNuber: "747474747"
        },
        {
            id: 2,
            name: "John",
            email: "john@gmail.com",
            mobileNuber: "740074747"
        },
        {
            id: 3,
            name: "Max",
            email: "max@gmail.com",
            mobileNuber: "987474747"
        },
        {
            id: 4,
            name: "Elvis",
            email: "elvis@gmail.com",
            mobileNuber: "747474007"
        }
    ]
    const [value, setValue] = useState("");

    // var filteredName = [];
    // const onChangeHandle = (query) => {
    //      filteredName = refrences.filter((item) => {
    //         return query.toLowerCase() === '' ? item : item.name.toLowerCase().includes(query)
    //     },[])
    //     return filteredName;
    // }

    // useEffect = () => {
    //     setValue([{...filteredName}])
    // }

    return (
        <Fragment>
            <input onChange={(e) => setValue(e.target.value)}></input>
            {value}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                    </tr>
                </thead>
                {refrences.filter((item) => {
                    return value.toLowerCase() === '' ? item : item.name.toLowerCase().includes(value)
                }).map((refrence) => {
                    return (
                        <tbody key={refrence.id}>
                            <tr>
                                <td>{refrence.name}</td>
                                <td>{refrence.email}</td>
                                <td>{refrence.mobileNuber}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </Fragment>
    )
}

export default FilterTable;