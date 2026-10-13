import { useState, useEffect } from "react"


export const UserList = () => {

    const [person, setPerson] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    

    useEffect(() => {
        setLoading(true);
        setError(null);

        async function fetchData() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);

                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                const data = await response.json();
                setPerson(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
            }

        fetchData();
    }, [])
    if (loading) {
    return <h2>Loading users...</h2>;
  }
    return(
       
        <div>
            {error? <p style={{ color: "red" }}>Error: {error}</p>:
            <ul>{person.map(
                person => <li key={person.id}> {person.name}<br /> Contact- email-{person.email}, Phone No.- {person.phone} <br/>

                Details:- <br />
                Username- {person.username} <br />
                Company Name- {person.company.name}
                
                </li>
                )}</ul> }
        </div>
    )
}