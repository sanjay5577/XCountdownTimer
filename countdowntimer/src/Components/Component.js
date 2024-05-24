import "./Component.css"
const Component =({value , Notation})=>{

    // console.log(Notation)
    return (
        <div className="time">
            <div>{value}</div>
            <div>{Notation}</div>


        </div>
    )

}

export default Component;