import React, { useEffect} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreator from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading)
  const isError = useSelector((state) => state.user.error);

  useEffect(() => { 
    dispatch(actionCreator.getUsers()); 
  }, [dispatch])

  return (
    <div className="container">
      <div className='card_container'>
        {isError && <h2>Error has occured</h2>}
        {isLoading && <h2>Loading...</h2>}
        {users && users.length > 0 && users.map((user) => (
          <div className='card' key={user.id}>
            <p className='name'>{user.name}</p>
            <p className='email'>{user.email}</p>
            <p className='phone'>{user.phone}</p>
            <p className='website'>{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
