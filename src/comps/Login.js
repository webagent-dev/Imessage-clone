
import style from '../style/login.module.css'
import { IconButton } from '@material-ui/core'
import { auth, provider } from '../firebase'


function Login() {
        
    return (
        <div className={style.login__container}>
                <div className={style.logo}> 
                    <img src="https://icon-library.com/images/imessage-icon-png/imessage-icon-png-2.jpg" alt="logo__pic" />
                </div>
                <IconButton  onClick={() =>  auth.signInWithPopup(provider)}>
                <span className={style.login__btn}> Signin </span>
                </IconButton>
        </div>
    )
}

export default Login
