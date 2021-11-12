import Image from "./Image"
import Title from "./Title"
import Desc from "./Desc"
import Detail from "./Detail"
import Price from "./Price"
const style= {
    width:'500px',
    margin:'50px auto',
    height:'650px',
    borderRadius:'50px',
    overflow:'hidden',
    background:'#F5F5F5'
}
const style2={
    padding:'20px 25px'
}
const DCard=()=>{
    return(
        <>
    <div style={style}>
    <Image/>
    <div style={style2}>
    <Title/>
    <Desc/>
    <Detail content='265 Cal P/F/C:12/10/31 53.8 Degree C'/>
    <Price/>
    </div>
    </div>
    </>
    )
}
export default DCard