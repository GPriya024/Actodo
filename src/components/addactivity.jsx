
import Todoitem from "./todoitem"


function Addactivity(props) {

    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr


 return (
        <div className="bg-[#BDB4EA] border rounded-md p-3 flex-grow mt-0">
            <h1 className="text-2xl font-medium mb-1">Today's activities</h1>
            {activityArr.length===0?<p>You havent added anything yet</p>:""}
            {
                activityArr.map(function (item, index) {
                    return <Todoitem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                })
            }

        </div>
    )


}

export default Addactivity