import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
    const navigate = useNavigate();



    const handleLoginSubmit = (event) => {
        event.preventDefault();
        
        const { username, password } = loginInfo;
        console.log(`Username: ${username}, Password: ${password}`);
        
        if (username === 'admin' && password === "admin") {
            onLogin(true);
            navigate('/createpost');
        } else {
            alert('Invalid credentials');
        }
    };

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 sm:p-8">
                    <form className="space-y-4" onSubmit={handleLoginSubmit}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter Username"
                                value={loginInfo.username}
                                onChange={handleLoginChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                value={loginInfo.password}
                                onChange={handleLoginChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
