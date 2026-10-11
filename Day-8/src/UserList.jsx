import { useState, useEffect } from "react"
import axios from "axios";

export const UserList = () => {

    const [person, setPerson] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => {
                console.log(res);
                setPerson(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    if (loading) {
    return <h2>Loading users...</h2>;
  }
    return(
       
        <div>
            <ul>
                {
                    person.map(person => <li key={person.id}>{person.name} <br /> Contact- {person.email}</li>)
                }
            </ul>
        </div>
    )
}