import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(1000);
    //     }, 5000);
    //     document.title = count;
    // }, []);

    //! API fetching
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(err => console.log(err));
    }, []); // Dependency array added

    return (
        <div className="parent">
            <h2>UseEffect Example</h2>
            {users.map((user) => (
                <div key={user.id}> {/* Correct key usage */}
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                </div>
            ))}
        </div>
    );
};

export default UseEffectEx;