import TuitItem from "./tuit-item";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TuitsList = () => {
    const {tuits} = useSelector(state => state.tuits)
    return(
        <div className="list-group">
            {
                tuits.map(tuit => {
                    return(<TuitItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    )
}
export default TuitsList;