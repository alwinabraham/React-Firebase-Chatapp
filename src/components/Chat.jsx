import React, { useState, useEffect } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../firebase-config'

const Chat = (props) => {
    
    const {room} = props
    const [newMessage,setNewMessage] = useState("")
    const [messages, setMessages] = useState([])
    const messageRef = collection(db, "messages")

    useEffect(()=>{
        const queryMessages = query(messageRef, where("room", "==", room))
        const unsubscribe = onSnapshot(queryMessages,(snapshot)=>{
            let messages = [];
            snapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })

        return () => unsubscribe()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(newMessage);

        if(newMessage === "") return;
        await addDoc(messageRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })
        setNewMessage("")
    }

    return (
        <div>
        <div>{messages.map((message)=><p>{message.text}</p>)}</div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Type your message here...' onChange={(e)=>setNewMessage(e.target.value)} value={newMessage} />
                <button type='submit'> Send</button>
            </form>
        </div>
    )
}

export default Chat