import RightSide from './Sides/RightSide/RightSide';
import MainSide from './HomePage/MainSide';
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
                <MainSide />
            </div>
            <hr />
            <div className='leftSide'>
                <LeftSide />
            </div>


        </div>
    );
}

export default App;
