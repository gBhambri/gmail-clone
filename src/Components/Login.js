import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth,provider } from '../Firebase/Firebase'
import './Login.css'
function Login() {
    const dispatch=useDispatch()
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user?.displayName,
                email:user?.email,
                photoUrl:user?.photoURL
            }))
           
        })
        .catch((error)=>{
            alert(error)
        })
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img alt="Logo" src="data:image/jpeg;base64,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"></img>
                <Button className="login__button" variant='contained' color='primary' onClick={signIn}>Sign In</Button>
            </div>
            
        </div>
    )
}

export default Login
