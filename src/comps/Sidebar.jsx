import { useEffect, useState} from 'react'
import style from '../style/sidebar.module.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Channel from  './other/Channel'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from '../feature/userSlice'
import { db } from '../firebase'


function Sidebar() {
    const user = useSelector(selectUser) 
    const dispatch = useDispatch()
const [channel, setChannel] = useState([])
    
    useEffect(() => {
            db.collection('chat')
            .onSnapshot((snap) => 
            setChannel(snap.docs.map((doc) => ({ 
                id: doc.id,
                data: doc.data()
            }))))
    },[])
        const addChat = () => {
            const channelName = prompt('Please Enter Channel Name')
            if(channelName){
         db.collection('chat') .add({
                channel: channelName
            })
            }
        }
       
    return (
        <div className={style.sidebar__container}>
            <div className={style.header}>
            <Avatar  src={user.photo}  onClick={() => dispatch(logout())}/>
            <div className={style.input__wrapper}>
                <SearchIcon  className={style.icon}/> 
                <input  type='text' placeholder='Search'/>
            </div>
              <IconButton onClick={addChat} >
                <RateReviewIcon />
            </IconButton>
            </div>
          
            <div className={style.chennel}>
                {
                        channel && channel.map(({id, data}) => <Channel  key={id} id={id} data={data}/> )
                        
                        
                } 
            </div>
        </div>
    )
}

export default Sidebar
