

function Todoitem(props) {
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr




function handleChange(deleteid){
    var tempArr=activityArr.filter(function(item){
        if(item.id===deleteid)
        {
            return false
        }
        else
        {
            return true
        }
    })
setActivityArr(tempArr)
}


    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-600" onClick={()=>handleChange(props.id)}>Delete</button>
        </div>



    )

}

export default Todoitem