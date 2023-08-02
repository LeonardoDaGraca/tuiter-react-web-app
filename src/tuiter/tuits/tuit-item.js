import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import { faXmark } from "@fortawesome/free-solid-svg-icons";



const TuitItem = (
    {
        tuit = {
            "_id": 345,
            "topic": "Automotive",
            "userName": "Tesla",
            "title": "Our multichannel audio algorithm enables stereo content to be upmixed in real time & adjusts the sound system relative to traffic noise.",
            "time": "3h",
            "image": "tesla.jpeg",
            "liked": true,
            "replies": 345,
            "retuits": 567,
            "likes": 3456,
            "handle": "@tesla",
            "tuit": "This makes for an immersive listening experience no matter what's happening around you.🎵"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <div className="list-group-item pt-3 wd-post-list-item border-1">
            <div className="row">
                <div className="col-auto">
                    <img width={50}
                            className="float-end rounded-circle"
                            src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <FontAwesomeIcon className= "float-end" icon={faXmark} onClick={() => deleteTuitHandler(tuit._id)}/>
                        <span className="fw-bolder">{tuit.userName}{' '}</span>
                        <FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-primary"/>
                        <span className="text-secondary">{' '}{tuit.handle} {'\u00B7'} {tuit.time}</span>
                    </div>
                    <div className="mb-4">
                        {tuit.tuit}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </div>
    )
}
export default TuitItem;


