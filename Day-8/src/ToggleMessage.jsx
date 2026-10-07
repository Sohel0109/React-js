import { useState } from "react"

export const ToggleMessage = () => {
    const [message, setmessage] = useState(true)

    const handleClick = () => {
        setmessage(!message);
    }

    const items = [
        {
            id: 1,
            name: "Laptop",
            price: "1000"
        },
        {
            id: 2,
            name: "Watch",
            price: "10"
        },
        {
            id: 3,
            name: "food",
            price: "100"
        },
        
    ]

    const [list, setList] = useState(true);

    const handleClickList = () => {
        setList(!list);
    }
    return(
        <>
        <button onClick={handleClick}>{message? "Click to remove the message":"Click to bring a messsage"}</button>
        <p >{message? "The message is here":null}</p><br /><br /><br /><br />

        <div>
            {list && items.map((item) => {
                    return(

                    <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>price-${item.price}</p>
                    </div>
                    )
                })
            }
            <button onClick={handleClickList}>{list? "Remove the List":"Add the List"}</button>
        </div>
        </>
    )
}