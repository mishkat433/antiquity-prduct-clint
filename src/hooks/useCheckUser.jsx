import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCheckUser = (email) => {
    const [checkUser, setCheckUser] = useState('')
    const [userCheckLoading, setUserCheckLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5200/usersCheck/${email}`, {
            })
                .then(res => res.json())
                .then(data => {
                    setCheckUser(data?.useCheck)
                    setUserCheckLoading(false)
                })
        }
    }, [email, userCheckLoading, navigate])
    return [checkUser, userCheckLoading]
}

export default useCheckUser;
