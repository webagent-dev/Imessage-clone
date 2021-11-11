import { useEffect, useState } from 'react'
import style from '../style/main.module.css'
import { IconButton } from '@material-ui/core'
import { MicOutlined } from '@material-ui/icons'
import Message from './other/Message'
import { selectChatName, selectChatId, selectInfo} from '../feature/chatSlice'
import { useSelector } from 'react-redux'
import { db } from '../firebase'
import firebase from 'firebase'
import { selectUser } from '../feature/userSlice'

function Main() {
     const user = useSelector(selectUser)
        const channelName = useSelector(selectChatName)
        const channelId = useSelector(selectChatId)
        const [message, setMessage] = useState([])
        const [input, setInput ] = useState('')
        // const chatInfo = useSelector(selectInfo)
    useEffect(() => {
        if(channelId){
             db.collection('chat')
            .doc(channelId)
            .collection('message')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snap) =>setMessage(snap.docs.map((doc) =>({
                id: doc.id,
                data: doc.data()
            }))))
        }
    },[channelId])

const handleMessage = e => {
    e.preventDefault();
    db.collection('chat')
    .doc(channelId)
    .collection('message')
    .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input
    })
    setInput('')
}
    return (
        <div className={style.main__container}>
       <div className={style.main__header}>
           <h3>To:<span className={style.color}>{channelName}</span></h3>
           <p>Details</p>
       </div>
        <div className={style.message__container}>
                 {
                    message && message.map(({id, data}) => <Message key={id}  id={id} data={data}/>) 
                } 
        </div>

            <div className={style.message__input}>
                <form onSubmit={handleMessage}>
                <input type="text" placeholder='iMessage' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit' style={{display: 'none'}}> send</button>
                </form>
        <IconButton>
               <MicOutlined /> 
        </IconButton>
            </div>
        </div>
    )
}

export default Main
