import api from "@/api/axios"
import { setToken } from "@/token"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState("")
    const [formData, setFormData] = useState({
        identifier: "",
        password: ""
    })

    const handleChange = (e) => {
        setLoginError("")
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        setLoginError("")
        e.preventDefault()
        let params = new URLSearchParams(formData)
        api.get(`/users/login?${params.toString()}`)
            .then((res) => {
                setToken(res.data.access_token).then(() => navigate('/'))
            })
            .catch((err) => {
                console.log(err)
                setLoginError(err.response.data.message)
            })
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-[#bfe3dd] mt-10 p-5 rounded-md w-1/5 h-3/5 flex flex-col divide-y-2 gap-y-2">
                    <div className="font-medium text-2xl">Login Form</div>
                    <form onSubmit={handleSubmit} className="pt-3">
                        <div className="mb-4">
                            <label htmlFor="indentifier" className="block text-gray-700 font-medium mb-2">
                                Email or Nickname
                            </label>
                            <input
                                type="text"
                                id="identifier"
                                name="identifier"
                                value={formData.identifier}
                                onChange={handleChange}
                                placeholder="Enter your email or nickname"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Email or Nickname
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-200">
                            Login
                        </button>
                        <div className="mt-2 text-md text-red-500 italic">{loginError}</div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login