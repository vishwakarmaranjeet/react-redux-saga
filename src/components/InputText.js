import React from 'react';

const InputText = ({inputValue, onChange, placeholderText, type})=> {
    return (
        <>
        <input type={type} className="w-full md:w-64 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-gray-700 focus:bg-white focus:border-blue-600" value={inputValue} placeholder={placeholderText} onChange={(e)=>onChange(e.target.value)}/>
        </>
    );
}

export default InputText;