import RightSide from './Sides/RightSide/RightSide';
import MainSide from './Sides/Main/MainSide';
import LeftSide from './Sides/LeftSide/LeftSide';
import '../asset/App.scss';

function App() {


    return (

        <div className="app">
            <div className='rightSide'>
                <RightSide />
            </div>
            <hr />

            <div className="mainSide">
                Main Side Boyyiii
            </div>
            <div className="leftSide">
                Left Side Boy
            </div>


        </div>
    );
}

export default App;
