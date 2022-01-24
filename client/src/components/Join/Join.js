import React ,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
// import io from 'socket.io-client'

import './Join.css'
import {socket} from '../../socket'



export default function Join(){

    const [name,setName] = useState('')
    const [room,setRoom] = useState('')
    // const [error,setError] = useState('')
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        socket.emit('another','from join')
        socket.on('MYerror',(msg)=>{

            setMessages(prev=>[...prev,msg])
            console.log(messages,msg)
        })

    },[])

    return(
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div><input className='joinInput' placeholder='Name' type='text' onChange={(event)=>setName(event.target.value)} /></div>
                <div><input className='joinInput mt-20' placeholder='Room' type='text' onChange={(event)=>setRoom(event.target.value)} /></div>
                <Link onClick={e=>(!name || !room) ? e.preventDefault():null} to={`/chat?name=${name}&&room=${room}`}>
                    <button className='button mt-20'>Sign In</button>
                </Link>

            </div>
        </div>
    )
}

export {socket}