import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { likeTuit } from "../reducers/tuits-reducer";
import { updateTuitThunk } from "../services/tuits-thunks";


const TuitStats = (
    {
        tuit = {
            "_id": 345,
            "topic": "Automotive",
            "userName": "Tesla",
            "title": "Our multichannel audio algorithm enables stereo content to be upmixed in real time & adjusts the sound system relative to traffic noise.",
            "time": "3h",
            "image": "tesla.jpeg",
            "liked": false,
            "replies": 345,
            "retuits": 567,
            "likes": 3456,
            "handle": "@tesla",
            "tuit": "This makes for an immersive listening experience no matter what's happening around you.🎵"
        }
        
    }
) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (event) => {
        event.preventDefault();
        if (!tuit.liked) {
          console.log("Liking tuit", tuit._id);
          dispatch(likeTuit(tuit._id));
        }
    };
    
    return(
        <>
            <div className="row">
                <button className="col text-secondary border-0 bg-transparent text-start">
                    <FontAwesomeIcon icon={faComment} className="pe-1 pe-sm-2" />
                    <span>{tuit.replies}</span>
                </button>
                <button className="col text-secondary border-0 bg-transparent text-start">
                    <FontAwesomeIcon icon={faRetweet} className="pe-1 pe-sm-2" />
                    <span>{tuit.retuits}</span>
                </button>
                <button className="col text-secondary border-0 bg-transparent text-start" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))}>
                    {tuit.liked ? (
                    <FontAwesomeIcon icon={faHeart} color={'red'} className="pe-1 pe-sm-2" />
                    ) : (
                    <FontAwesomeIcon icon={faHeart}  className="pe-1 pe-sm-2" />
                    )}
                    <span>{tuit.likes}</span>
                </button>
            </div>
        </>
    )
}

export default TuitStats;
