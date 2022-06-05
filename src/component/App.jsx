import RightSide from './Sides/RightSide/RightSide';
import Home from '../pages/HomePage/Home';
import LeftSide from './Sides/LeftSide/LeftSide';
import '../asset/App.scss';
import TweetByHashTag from '../pages/TweetsByHashTag/TweetByHashTag';
import TweetByUser from '../pages/TweetByUser/TweetByUser';
import { Route, Routes } from 'react-router-dom';
import Error404 from '../pages/P404/Page404';

function App() {


    return (

        <div className="app">
            <RightSide />
            <hr />
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route  path={'/'} element={<Error404 />} />
            </Routes>

            {/* <TweetByHashTag /> */}
            {/* <TweetByUser /> */}
            <hr />
            <LeftSide />
        </div>
    );
}

export default App;
