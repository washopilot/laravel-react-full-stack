import { Link } from 'react-router-dom';

const Login = () => {
    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    return (
        <div className="login-signup-form animated fadeInDown ">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login into your account</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                </form>
                <p className="message">
                    Not Registred? <Link to={'/signup'}>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
