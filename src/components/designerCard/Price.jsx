const Price= ()=>{
    const style={
        display:'flex',
        gap:'110px'
    }
    const btnStyle={
        background:'green',
        width:'100px',
        color:'white',
        fontSize:'15px'
    }
    const red={
        color:'red',
        textDecoration:'line-through'
    }
    return(<div style={style}>
        <h2>$23.90</h2>
        <h3 style={red}>$29.90</h3>
        <button style={btnStyle}>O R D E R</button>
    </div>)
}
export default Price