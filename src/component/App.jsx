import Home from '../pages/HomePage/Home';
import '../asset/App.scss';
import TweetByHashTag from '../pages/TweetsByHashTag/TweetByHashTag';
import TweetByUser from '../pages/TweetByUser/TweetByUser';
import { Route, Routes } from 'react-router-dom';
import Error404 from '../pages/P404/Page404';
import SideBarLayout from './Sides/Layout/SideBarLayout';
import Auth from '../pages/Auth/Auth';


function App() {

    return (
        <div className="app">
            <Routes>
                <Route element={<SideBarLayout />}>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'hashtags/:hashtag'} element={<TweetByHashTag />} />
                    <Route path={'users/:user'} element={<TweetByUser />} />
                    <Route path={'*'} element={<Error404 />} />
                </Route>
                <Route path={'auth'} element={<Auth />} />
            </Routes>

            {/* <TweetByHashTag /> */}
            {/* <TweetByUser /> */}
        </div>
    );
}

export default App;
