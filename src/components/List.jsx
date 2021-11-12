import ListHeader from "./ListHeader.jsx"
import ListItem from "./ListItem.jsx"
const List=()=>{
    return(<>
        <ListHeader title='Mobile Operating System'/>
        <ul>
        <ListItem title='Android'/>
        <ListItem title='Blackberry'/>
        <ListItem title='iPhone'/>
        <ListItem title='Windows Phone'/>
        </ul>
        <ListHeader title='Mobile Manufacturers'/>
        <ul>
        <ListItem title='Samsung'/>
        <ListItem title='HTC'/>
        <ListItem title='Micromax'/>
        <ListItem title='Apple'/>
        </ul>
        </>
    )
}
export default List