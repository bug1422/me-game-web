import api from "@/api/axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        nickname: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data Submitted:", formData);
        api.post("/users/register",formData,{
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            navigate('/')
        })
        .catch((err) => console.error(err))
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-[#bfe3dd] mt-10 p-5 rounded-md w-1/5 h-3/5 flex flex-col divide-y-2 gap-y-2">
                    <div className="font-medium text-2xl">Register Form</div>
                    <form onSubmit={handleSubmit} className="pt-3">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nickname" className="block text-gray-700 font-medium mb-2">
                                Nickname
                            </label>
                            <input
                                type="text"
                                id="nickname"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                placeholder="Enter your nickname"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
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
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register