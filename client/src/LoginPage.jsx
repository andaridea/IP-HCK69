import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function LoginPage() {
    const navigate = useNavigate()
    async function handleCredentialResponse(response) {
        try {
            const { data } = await axios({
                method: "POST",
                url: "http://localhost:3000/login",
                headers: {
                    google_token: response.credential
                }
            })
            localStorage.access_token = data.access_token
            navigate("/hotels")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "507837005559-ofrc326qv9vnu2802ihntvdqg2tc11i1.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }  // customization attributes
            );
            google.accounts.id.prompt(); // also display the One Tap dialog
        }
    }, [])
    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <img
                                src="./globe.png"
                                alt="Logo"
                                className="h-12"
                            />
                            <span className="ml-2 text-lg font-extrabold text-purple-600 font-sans">Staycation!</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-6">Sign in to Your Account</h2>
                    <div id="buttonDiv" className="flex justify-center mb-6"></div>
                    <div className="text-center text-sm text-gray-500">
                        By signing in or creating an account, you agree with our{" "}
                        <span className="font-bold text-blue-500 cursor-pointer">Terms and Conditions</span>
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-2">
                        All rights reserved. Copyright 2024 - staycation.com
                    </div>
                </div>
            </div>
        </>
    )
}