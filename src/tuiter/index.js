import { Routes, Route } from "react-router";
import Nav from "../nav";
import HomeScreen from "./navigation-sidebar/home-screen";
import NavigationSidebar from "./navigation-sidebar";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter(){
    return(
        <Provider store={store}>
        <div>
            <Nav />
            <div className="row">
            <div className="col-2">
                <NavigationSidebar />
            </div>
            <div className="col-7">
                <Routes>
                    <Route path="/home" element={<HomeScreen/>} />
                    <Route path="/explore" element={<ExploreScreen/>} />
                    <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                    <Route path="/profile" element={<ProfileScreen />} />
                </Routes>
            </div>
            <div className="col-3">
                <WhoToFollowList/>
            </div>
            </div>
        </div>
        </Provider>
    );
}
export default Tuiter