import './Login.css';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILogin } from '../../models/login.model';
import { isEmail } from '../../utils/mail.utils';



export default function Login(){
    const navigate = useNavigate();
    const [ok,setOk] = useState(false);

    const [login, setLog] = useState<ILogin>({
        mail : '',
        password : ''
    });


    const handleLogin = async() => {
        navigate('/home');
        return;
    }

    const handleMailChange = (event:ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        (isEmail(text)) ? setOk(true) : setOk(false);
        setLog((old) => {
            old.mail = text;
            return old;
        });
    }

    const handlePassChange = (event:ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setLog((old) => {
            old.password = text;
            return old;
        });
    }

    return(
    <div id="login">
        <div id="form-login">
            <header>
                <h2>Login</h2>
            </header>
            <label>Mail :</label><br></br>
            <input type='text' name='id' placeholder='example@gmail.com' onChange={handleMailChange}></input><br></br>
            {!ok && <p className='error'>Please enter a correct email</p>}
            
            <label>Password :</label><br></br>
            <input type='password' name='password' placeholder='Password' onChange={handlePassChange}></input>
            <footer>
                <button onClick={handleLogin}>Login</button>
            </footer>
        </div>
    </div>
    );
}