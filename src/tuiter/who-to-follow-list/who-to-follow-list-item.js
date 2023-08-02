import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: '../images/nasa-avatar.jpg' }
    }
) => {
 return(
  <li className="list-group-item">
   <div className="row align-items-center">
     <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
       <img className="rounded-circle" height={48} src={who.avatarIcon}/>
     </div>
     <div className="col-lg-8 col-xl-8 col-xxl-8 text-nowrap">
        <div className="fw-bold">{who.userName} <i className="fas fa-check-circle fa-check-circle-override"/></div>
        <div>@{who.handle}</div>
     </div>
     <div className="col-lg-2 col-xl-2 col-xxl-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;


{/* <li className="list-group-item">
<div className="row">
<div className="col-2">
<img className="rounded-circle" height={48} src={`./images/${who.avatarIcon}`}/>
</div>
<div className="col-8">
<div className="fw-bold">{who.userName} <i className="fas fa-check-circle fa-check-circle-override"/></div>
<div>@{who.handle}</div>
</div>
<div className="col-2">
<button className="btn btn-primary rounded-pill float-end">Follow</button>
</div>
</div>
</li> */}