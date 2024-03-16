import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { fetAllUser } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.value)
  const listUser = useSelector(state => state.user.listUser)
  const isLoading = useSelector(state => state.user.isLoading)
  const isError = useSelector(state => state.user.isError)


  useEffect(() => {
    dispatch(fetAllUser())

  }, [])

  
  console.log(listUser)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{display: 'flex', gap: 20, marginTop: '10px'}}> 
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
       
        <div>count = {count}</div>
        {isLoading === true ? (
           <div>Loading...</div>
        ) : isError === true ? (
          <div>Error</div>
        ): (
          <table>
          <thead>
            <th>ID</th>
            <th>Email</th>
            <th>UserNam</th>
          </thead>
          {listUser && listUser.length > 0 && listUser.map((item, index) => {
            return (
              <tbody key={`user-${index}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
              </tbody>

            )
          })}
          
        </table>
        )
        }
       
      </header>
    </div>
  );
}

export default App;
