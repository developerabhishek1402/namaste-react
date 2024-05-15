import { useEffect } from "react";

const User = ({name, location}) => {

    useEffect(() => {

        return (
            () => {
                console.log("clear")
            }
        )

    }, [])

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h4>{location}</h4>
            <h5>developer.abhishek.1402@gmail.com</h5>
        </div>
    )
}


export default User;