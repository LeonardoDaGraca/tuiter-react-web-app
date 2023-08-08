import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
      }, [])     

    return(
        <div className="list-group">
             { loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit => {
                    return(<TuitItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    )
}
export default TuitsList;