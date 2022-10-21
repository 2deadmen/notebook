
import Notes from "./Notes"
import Addnotes from "./Addnotes"
const Home = (props) => {
 
    return (
    <>

   <Addnotes/>
    <Notes showalert={props.showalert} />
    </>
  )
}

export default Home
