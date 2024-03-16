import logo from './logo.svg';
import './App.scss';
import {useSelector, useDispatch} from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/actions/counterAction';
import HomeComponent from './components/HomeComponent';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './components/HeaderComponent';

function App() {

  return (
    <div className="container-flud">
       <HeaderComponent/>
       <div className='container'>
         <HomeComponent/>

       </div>
       
       
    </div>
  );
}

export default App;
