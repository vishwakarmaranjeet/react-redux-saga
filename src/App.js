import React, { useEffect, useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreator from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading)
  const isError = useSelector((state) => state.user.error);
  // Input value
  const value = useSelector((state) => state.inputValue.inputValue);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState(users);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = users.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else { 
      setFilteredResults(users)
    }
  }

  useEffect(() => { 
    dispatch(actionCreator.getUsers()); 
  }, [dispatch])


  const inputChangeHandler = (e) => { 
    dispatch(actionCreator.updateInputValue(e.target.value));
  }

  return (
    <main>
      <section className="wrapper">
      <h3>Input Value : {value}</h3><br/>
        <section className='flex_row'>
          <section className='input_container'>
            <input type="text" placeholder='Enter city name' value={value} onChange={(e) => { inputChangeHandler(e) }} />
            <input type="text" placeholder='Filter the data' onChange={(e) => searchItems(e.target.value)} />
          </section>
        </section>
      <section className='card_container'>
        {isError && <h2>Error has occured</h2>}
          {isLoading && <h2>Loading...</h2>}
          {searchInput.length > 0 ? filteredResults.map((user) => (
           <article className='card' key={user.id}>
            <p className='name'>{user.name}</p>
            <p className='email'>{user.email}</p>
            <p className='phone'>{user.phone}</p>
            <p className='website'>{user.website}</p>
          </article>
          )) : users && users.length > 0 && users.map((user) => (
            <article className='card' key={user.id}>
              <p className='name'>{user.name}</p>
              <p className='email'>{user.email}</p>
              <p className='phone'>{user.phone}</p>
              <p className='website'>{user.website}</p>
            </article>
          ))}
      </section>
      </section>
      </main>
  );
}

export default App;
