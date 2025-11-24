import { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctPassword = import.meta.env.VITE_APP_PASSWORD || 'demo123';

        if (password === correctPassword) {
            localStorage.setItem('llm_council_auth', 'true');
            onLogin();
        } else {
            setError('Mot de passe incorrect');
            setPassword('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>LLM Council</h1>
                <p>Veuillez vous connecter</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        autoFocus
                    />
                    {error && <div className="error">{error}</div>}
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
