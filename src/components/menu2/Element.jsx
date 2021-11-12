import './Element.css'
const Element=({id,title})=>{
    const getColor=(id)=>{
        switch(id){
            case '1':
                return{
                    background:'cyan'
                }
            case '2':
                return{
                    background:'grey'
                }
            case '3':
                return{
                    background: 'orange'
                }
            case '4':
                return{
                    background:'red'
                }
            case '5':
                return{
                    background:'green'
                }
            case '6':
                return{
                    background:'purple'
                }
            case '7':
                return{
                    background:'pink'
                }
            case '8':
                return{
                    background:'olive'
                }
            default:
                return{}
        }
    }
    const bgColor= getColor(id)
    return(
        <div className='element' style={bgColor}>{title}</div>
    )
}
export default Element