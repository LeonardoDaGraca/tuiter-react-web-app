import React, { useState } from "react";
import { AiOutlinePicture} from "react-icons/ai";
import { TiCalendarOutline } from "react-icons/ti";
import { BiItalic, BiBold } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { HiOutlineLocationMarker} from "react-icons/hi";
import {HiOutlineGif} from "react-icons/hi2";
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch} from "react-redux";



const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  } 
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/nasa-avatar.jpg" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
           <i><AiOutlinePicture className="me-3"/></i>
           <i><HiOutlineGif className="me-3"/></i>
           <i><MdFormatListBulleted className="me-3"/></i>
           <i><BsEmojiSmile className="me-3"/></i>
           <i><TiCalendarOutline className="me-3"/></i>
           <i><HiOutlineLocationMarker className="me-3"/></i>
           <i><BiBold className="me-3"/></i>
           <i><BiItalic className="me-3"/></i>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;