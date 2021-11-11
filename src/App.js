import React, { useEffect, } from 'react'
import './App.css'
import Login from './comps/Login'
import { auth} from './firebase'
import { login, logout,  selectUser} from './feature/userSlice'
import { useDispatch,useSelector}  from 'react-redux'
import Container from './comps/Container'



function App() {
const dispatch = useDispatch()
const users = useSelector(selectUser)

useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if(user){
            dispatch(login({
                email: user.email,
                uid: user.uid,
                name: user.displayName,
                photo: user.photoURL
            }))
            return
         }
            dispatch(logout())
    })
}, [dispatch])
    return (
          <>
          {
              !users
              ? <Login />
              : <Container />
          }
          </>
    )
}

export default App
