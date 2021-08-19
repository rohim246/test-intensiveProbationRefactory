import FacebookLogin from "react-facebook-login"
import { useState } from "react";
import { Button } from "react-bootstrap";

import './facebook.scss'

const Facebook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userID, setUserID] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")

    const userToken = localStorage.getItem("accessToken")

    const responseFacebook = (response) => {
        console.log(response);

        localStorage.setItem("accessToken", response.accessToken)

        setIsLoggedIn(true)
        setUserID(response.userID)
        setName(response.name)
        setEmail(response.email)
        setPicture(response.picture.data.url)
    }

    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        setIsLoggedIn(false)
    }

    const componentClicked = () => console.log("clicked");

    return (
        <div className="facebook d-flex flex-column align-items-center pt-5">
            {isLoggedIn && userToken ?
                (
                    <div
                        style={{
                            width: "400px",
                            margin: "auto",
                            background: "#f4f4f4",
                            padding: "20px"
                        }}
                    >
                        <img src={picture} alt={name} />
                        <h2>Welcome {name}</h2>
                        userID {userID}

                        <Button variant="primary" className="buttonLogout" onClick={handleLogout}>Logout</Button>
                    </div>
                )
                :
                (
                    <FacebookLogin cssClass="facebookLogin shadow"
                        appId="176529437906035"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                    />
                )
            }
        </div>
    )
}

export default Facebook