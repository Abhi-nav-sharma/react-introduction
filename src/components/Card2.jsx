import JoinUs from "./JoinUs"
import Settings from "./Settings"
import styles from "./Card2.module.css"
import Login from "./Login"
import ContactUs from "./ContactUs"
import Search from "./Search"
import Help from "./Help"
import Home from "./Home"
import Download from "./Download"
const Card2=()=>{
    return(
    <div className={styles.conatiner}>
    <JoinUs/>
    <Settings/>
    <Login/>
    <ContactUs/>
    <Search/>
    <Help/>
    <Home/>
    <Download/>
    </div>
    )
}
export default Card2