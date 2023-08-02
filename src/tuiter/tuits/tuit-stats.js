import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faRetweet } from "@fortawesome/free-solid-svg-icons";

const TuitStats = (
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
    return(
        <>
            <div className="row">
                <a href="/#" className="col text-secondary text-decoration-none">
                    <FontAwesomeIcon icon={faComment} className="pe-1 pe-sm-2" />
                    <span>{tuit.replies}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    <FontAwesomeIcon icon={faRetweet} className="pe-1 pe-sm-2" />
                    <span>{tuit.retuits}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    {tuit.liked ? (
                    <FontAwesomeIcon icon={faHeart} color="red" className="pe-1 pe-sm-2" />
                    ) : (
                    <FontAwesomeIcon icon={faHeart} className="pe-1 pe-sm-2" />
                    )}
                    <span>{tuit.likes}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className="pe-1 pe-sm-2" />
                </a>
            </div>
        </>
    )
}

export default TuitStats;
