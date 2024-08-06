import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProfileData();
    }, [])


    const getProfileData = () => {
        setLoading(true)
        const token = JSON.parse(localStorage.getItem('token'))

        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
            .then((res) => {
                setLoading(false)
                setUserData(res.data)
                console.log("profile data", res)
            })
            .catch((err) => {
                setLoading(false)
                alert("You are not logged in")
                console.log("Error occured", err)
            })
    }

    return (
        <div>

            {loading ? <p className='text-center font-semibold text-lg'>Data is loading</p> :
                userData &&

                <div>
                    <p>Name : {userData?.name || "N/A"} </p>
                    <p>Email : {userData?.email || "N/A"}</p>
                    <p>Role : {userData?.role || "N/A"}</p>
                    <img className='rounded-full h-20 w-20' src={userData?.avatar} alt="Avatar" />
                </div>
            }

        </div>
    )
}

export default Profile