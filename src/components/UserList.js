import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../redux/actions";
import InputText from "../components/InputText";
// import DisplayDetails from './Context/DisplayDetails';
// import UserDetails from './Context/UserDetails';
// import DisplayCounter from './components/DisplayCounter';

const UserList = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector((state) => state.userReducer.data);
    const isLoading = useSelector((state) => state.userReducer.loading);
    const isError = useSelector((state) => state.userReducer.error);
    const value = useSelector((state) => state.inputValue.inputValue);
    const searchUsersReducer = useSelector(
        (state) => state.searchUserReducer.allSearchUsers
    );
    const noResultReducer = useSelector((state) => state.searchUserReducer.error);
    const [searchInput, setSearchInput] = useState("");
    // const [filteredResults, setFilteredResults] = useState(users);
    // const [counter, setCounter] = useState(0);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        dispatch(actionCreator.searchUsers(userReducer, searchInput));
        // if (searchInput !== "") {
        //   const filteredData = users.filter((item) => {
        //     return Object.values(item)
        //       .join("")
        //       .toLowerCase()
        //       .includes(searchInput.toLowerCase());
        //   });
        //   setFilteredResults(filteredData);
        // } else {
        //   setFilteredResults(users);
        // }
    };

    useEffect(() => {
        dispatch(actionCreator.getUsers());
        dispatch(actionCreator.clearUserSearched());
    }, [dispatch]);
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
    const accessbilityHandler = () => {
        console.log("Great it's working...");
    };
    const onKeyDownAccess = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            console.log("Entered");
        }
    };
    const renderUserList = (user) => {
        return (
            <div
                key={user.id}
                className="outline-neutral-900 w-full lg:w-64 block p-6 bg-white rounded-md border border-gray-200 shadow-md hover:bg-gray-100 dark:hover:bg-gray-100 lg:mr-3 mt-3"
                tabIndex={0}
                onClick={accessbilityHandler}
                onKeyDown={onKeyDownAccess}
            >
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 truncate">
                    {user.name}
                </h5>
                <p className="text-gray-700 text-base mb-4">{user.emai}</p>
                <p className="text-gray-700 text-base">{user.phone}</p>
                <p className="text-gray-700 text-base">{user.website}</p>
            </div>
        );
    };

    return <>
        {/* Context API uses */}
        {/* <UserDetails>
          <DisplayDetails/>
        </UserDetails> */}
        {/* Context API uses */}
        {/* <DisplayCounter /> */}
        {/* <h3>Input Value : {value}</h3>*/}
        <section className="flex_row">
            <section className="input_container">
                <InputText
                    type="text"
                    placeholderText="Search by Name"
                    value={value}
                    onChange={(e) => searchItems(e)}
                />
            </section>
        </section>
        <section className="card_container">
            <div className="flex flex-wrap justify-items-stretch">
                {isError && <h2>Error has occured</h2>}
                {isLoading && <p>Loading please wait...</p>}
                {searchInput.length > 0 ? (
                    searchUsersReducer.length > 0 ? (
                        searchUsersReducer.map((user) => renderUserList(user))
                    ) : (
                        <div>{noResultReducer}</div>
                    )
                ) : (
                    userReducer &&
                    userReducer.length > 0 &&
                    userReducer.map((user) => renderUserList(user))
                )}
            </div>
        </section>
    </>
}
export default UserList;