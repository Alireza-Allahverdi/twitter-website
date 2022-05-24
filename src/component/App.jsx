import RightSide from './Sides/RightSide/RightSide';
import Home from '../pages/HomePage/Home';
import LeftSide from './Sides/LeftSide/LeftSide';
import '../asset/App.scss';
import TweetByHashTag from '../pages/TweetsByHashTag/TweetByHashTag';

function App() {


    return (

        <div className="app">
            <div className='rightSide'>
                <RightSide /> 
            </div>
            <hr />
            <div className='mainSide'>
                <Home />
                {/* <TweetByHashTag /> */}
            </div>
            <hr />
            <div className='leftSide'>
                <LeftSide />
            </div>


        </div>
    );
}

export default App;
