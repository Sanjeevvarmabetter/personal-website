import { Password } from "@mui/icons-material";
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {
    const [loginInfo, setLoginInfo] = useState({ username: '',password: ''});
    
    const navigate = useNavigate();


    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const { username, password } = loginInfo;

        if(username == 'admin' && password =='admin') {
            onLogin(true);
            navigate('/create');
        }else {
            alert('invalid creds');
        }
    };


    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo({ ...loginInfo,[name]:value});

    };
    
    
    return (
        <div>
            <h2>
                Login
            </h2>
            <form onSubmit={handleLoginSubmit}>
                <input
                    type="text"
                    name="usename"
                    placeholder="Enter Username"
                    value={loginInfo.usename}
                    onChange={handleLoginChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginInfo.password}
                        onChange={handleLoginChange}
                        />
                        <button type="submit">Login</button>
            </form>
        </div>
    );

}

export default LoginPage;