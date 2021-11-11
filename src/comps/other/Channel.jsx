
import React, {useEffect } from 'react'
import style from '../../style/channel.module.css'
import { Avatar, } from '@material-ui/core'
import { useSelector, useDispatch  } from 'react-redux'
import { selectUser } from '../../feature/userSlice'
import { setChat, setInfo, selectInfo,selectChatId } from '../../feature/chatSlice'
import { db } from '../../firebase'
import Fade from 'react-reveal/Fade'
function Channel({id, data}) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const info = useSelector(selectInfo)
    const chatId = useSelector(selectChatId)
    
    const displayChannel = () => {
        dispatch(setChat({
            chatId: id,
             chatName: data.channel
        }))
    }
    useEffect(() => {
        if(chatId){
            db.collection('chat')
            .doc(chatId)
            .collection('message')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snap) => {
                    dispatch(setInfo(
                        snap.docs.map((doc) => ( doc.data()))
                    ))
            })
        }
    },[chatId, dispatch])
    return (
        <>
        <Fade bottom>
        <div className={style.channel__container} onClick={displayChannel}>
                <Avatar src={user.photo}/>
                <div className={style.channel__detail}>
                        <div className={style.inside__detail}>
                               <h3>{data.channel}</h3> 
                         <small>{info?.timestamp}</small> 
                        </div>
                         <p>{info?.message}</p>
                </div>
            
        </div>
        </Fade>
        </>
    )
}

export default Channel
