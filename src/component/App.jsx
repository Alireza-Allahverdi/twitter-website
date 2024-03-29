import '../asset/App.scss';
import Home from '../pages/HomePage/Home';
import TweetByHashTag from '../pages/TweetsByHashTag/TweetByHashTag';
import TweetByUser from '../pages/TweetByUser/TweetByUser';
import { Route, Routes, Navigate } from 'react-router-dom';
import Error404 from '../pages/P404/Page404';
import SideBarLayout from './Sides/Layout/SideBarLayout';
import Auth from '../pages/Auth/Auth';


function App() {

    return (
                    <div className="app">
                        <Routes>
                            <Route element={isLoggedIn() ? <SideBarLayout /> : <Auth />}>
                                <Route path={'/'} element={<Home />} />
                                <Route path={'hashtags/:hashTags'} element={<TweetByHashTag />} />
                                <Route path={'users/:id/:username'} element={<TweetByUser />} />
                                <Route path={'*'} element={<Error404 />} />
                            </Route>
                            <Route path={'auth'} element={isLoggedIn() ? <Navigate to={"/"} /> : <Auth />} />
                        </Routes>
                    </div>
    );
}

const isLoggedIn = () => !!localStorage.getItem("x-auth-token")


export default App;
