import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate=useNavigate()
    const users=props.users
   // const setUsers=props.setUsers
    

    function handleUinput(evt) {
        setEntusname(evt.target.value)
    }

    function handlePinput(evt) {
        setEntpass(evt.target.value)

    }

    const [entusname, setEntusname] = useState()
    const [entpass, setEntpass] = useState()
    const [reguser,setReguser]=useState(true)
   


    function checkUser() {
        var userfound=false
        console.log(users)
        users.forEach(function (item) {
            if (item.username === entusname && item.password === entpass) {
                console.log("Login successful")
                userfound=true
                navigate("/landing",{state:{user: entusname}})
               
            }
            
        })

        if(userfound==false)
        {
            console.log("Login failed")
            setReguser(false)
        }

    }


    return (
        <div className="bg-black p-10 ">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                {reguser? <p>I help you manage your activities after you login:)</p>:<p className="text-red-500 font-bold">Please sign up before you login</p>}
                

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username" onChange={handleUinput}  ></input>
                    <input type="password" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password" onChange={handlePinput} ></input>

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
                        Login
                    </button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
                </div>

            </div>

        </div>
    )
}

export default Login