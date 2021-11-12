import Element from "./Element"
const style={
    display: 'flex',
    gap: '40px',
    maxWidth: '250px',
    flexWrap: 'wrap'
}
const Card3=()=>{
    return(
        <div style={style}>
            <Element id='1' title='Join Us'/>
            <Element id='2' title='Settings'/>
            <Element id='3' title='Login'/>
            <Element id='4' title='Contact Us'/>
            <Element id='5' title='Search'/>
            <Element id='6' title='Help'/>
            <Element id='7' title='Home'/>
            <Element id='8' title='Download'/>
        </div>
    )
}
export default Card3