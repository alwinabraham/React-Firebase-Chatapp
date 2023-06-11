import { useState,useRef } from "react"
import Auth from "./components/Auth"
import Cookies from 'universal-cookie'
import Chat from "./components/Chat"
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room,setRoom] = useState("")
  
  const roomInputRef = useRef(null)

  if(!isAuth){
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>    
      </div>
    )
  }
  return (
    <div>{room ?(
      <Chat room={room} />
    ):(
      <div className="">
        <label>Enter Room Name:</label>
        <input className="border border-gray-900" ref={roomInputRef} />
        <button className="bg-gray-700 text-white ml-5 rounded-xl p-3 " onClick={()=>setRoom(roomInputRef.current.value)}> Enter Chat</button>
      </div>
    )  
    }
    </div>
  )
}

export default App
