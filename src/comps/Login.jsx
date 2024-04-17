import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/v1/fashionhub/users/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: userName,
                    password: password
                }),
            });

            if (response.ok) {
                const data = await response.json();
                navigate('/');
                setLoggedIn(true);

            } else if (response.status === 400) {
                setLoginMessage('Username or password is incorrect!')
            } else {
                console.error('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            {loginMessage && <p>{loginMessage}</p>}
            {loggedIn && <p>Welcome, {userName}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={handleUserNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" 
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;