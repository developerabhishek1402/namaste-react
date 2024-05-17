import { useEffect, useState } from "react";

const useUserInternetStatus = () => {

    const [userInternetStatus, setUserInternetStatus] = useState(true)

    useEffect(() => {
        window.addEventListener("offline", () => {
            setUserInternetStatus(false)
        })


        window.addEventListener("online", () => {
            setUserInternetStatus(true)
        })
    }, [])

    return userInternetStatus;
}

export default useUserInternetStatus;