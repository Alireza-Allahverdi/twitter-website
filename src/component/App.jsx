import RightSide from './Sides/RightSide/RightSide';
import Home from './HomePage/Home';
import LeftSide from './Sides/LeftSide/LeftSide';
import '../asset/App.scss';

function App() {


    return (

        <div className="app">
            <div className='rightSide'>
                <RightSide /> 
            </div>
            <hr />
            <div className='mainSide'>
                <Home />
            </div>
            <hr />
            <div className='leftSide'>
                <LeftSide />
            </div>


        </div>
    );
}

export default App;
