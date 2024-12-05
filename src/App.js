import React from "react"
import ReactDOM from "react-dom/client"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import {useState} from "react"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
  const [users, setUsers] = useState(
    [
      {
        username: "John",
        password: "123"
      },
      {
        username: "JohnA",
        password: "1234"
      }
    ]
  )
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

root.render(
  <App />
)
export default App;
