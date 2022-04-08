import React, { useEffect, useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreator from './redux/actions';
import InputText from './components/InputText';
// import DisplayCounter from './components/DisplayCounter';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading)
  const isError = useSelector((state) => state.user.error);
  const value = useSelector((state) => state.inputValue.inputValue);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState(users);
  //const [counter, setCounter] = useState(0);

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

  // useEffect(() => { 
  //   let interval = setInterval(() => { 
  //     setCounter(counter + 1);
  //   }, 1000)
  //   return () => { 
  //     clearInterval(interval);
  //   }
  // })

  // const inputChangeHandler = (e) => { 
  //   dispatch(actionCreator.updateInputValue(e));
  // }

  return (
    <main>
      <section className="wrapper">
        {/* <DisplayCounter /> */}
        {/* <h3>Input Value : {value}</h3>*/}
        <section className='flex_row'>
          <section className='input_container'>
            {/* <InputText type="text" placeholderText='Enter city name' value={value} onChange={(e) => { inputChangeHandler(e) }} /> */}
            <InputText type="text" placeholderText='Search by Name' value={value} onChange={(e) => searchItems(e)} />
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
