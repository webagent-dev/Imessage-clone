import React from 'react'
import style from '../../style/message.module.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../feature/userSlice'
import Zoom from 'react-reveal/Zoom'
function Message({ id, data}) {
    const user = useSelector(selectUser)
    return (
        <>
        <Zoom left>
        <div className={` ${style.message__container} ${user.email === 'email'  &&  'message__sender'  }`}>
                <Avatar  src={user.photo} className={style.photo}/>
                <div className={style.chat}>
                       <p className={style.text}>{data.message}</p>
                         <small className={style.time}>{new Date(data.timestamp?.toDate()).toLocaleString()}</small>
                </div>
        </div>
        </Zoom>
        </>
    )
}

export default Message
