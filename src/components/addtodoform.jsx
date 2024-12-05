import { useState } from "react"

function Addtodoform(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivityArr, setNewactivityArr] = useState("")

    function handleAdd(evt) {
        setNewactivityArr(evt.target.value)

    }

    function handleaddActivity() {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivityArr}])
        setNewactivityArr("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newactivityArr} onChange={handleAdd} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity"></input>
                <button className="bg-black text-white p-1 mr-1 border border-black" onClick={handleaddActivity}>Add</button>
            </div>
        </div>
    )


}

export default Addtodoform