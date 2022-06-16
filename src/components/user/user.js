import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';
function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        axios.get(apiUrl).then((resp) => {
            const users = resp.data;
            setLoading(false)
            setUsers(users)
        })
    }, [setLoading, setUsers])

    return (
        <div className="user-cards">
            {loading && <div>Loading!</div>}
            {
                users.map((user) => {
                    return (
                        <div className="user-card">
                            <div>Name: {user.name}</div>
                            <div>UserName: {user.username}</div>
                            <div>Email {user.email}</div>
                            <div>City: {user.address.city}</div>
                            <div>Street: {user.address.street}</div>
                            <div>ZipCode: {user.address.zipcode}</div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Users;