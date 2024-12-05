import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate()
    const users = props.users
    const setUsers = props.setUsers
    const [entusname, setEntusname] = useState()
    const [entpass, setEntpass] = useState()

    function handleUinput(evt) {
        setEntusname(evt.target.value)
    }

    function handlePinput(evt) {
        setEntpass(evt.target.value)

    }

    function addUser() {
        setUsers([...users, { username: entusname, password: entpass }])
        navigate("/")

    }

    return (
        <div className="bg-black p-10 ">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                <p>Signup here:)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username" onChange={handleUinput}></input>
                    <input type="password" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password" onChange={handlePinput}></input>
                    <input type="password" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Confirm password"></input>
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
                        Signup
                    </button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>

            </div>

        </div>

    )



}

export default Signup