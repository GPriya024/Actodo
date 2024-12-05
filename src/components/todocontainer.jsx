import Addtodoform from "./addtodoform"
import Addactivity from "./addactivity"
import { useState } from "react"

function Todocontainer() {
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have breakfast"
        },
        {
            id: 3,
            activity: "Take shower"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
              <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>
              <Addactivity activityArr={activityArr} setActivityArr={setActivityArr}/>

               
            </div>


        </div>




    )
}

export default Todocontainer