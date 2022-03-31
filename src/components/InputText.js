import React from 'react';

const InputText = ({inputValue, onChangeHandler})=> {
    return (
        <>
            <input type='text' value={inputValue} onChange={(e)=>onChangeHandler(e.target.value)}/>
        </>
    );
}

export default InputText;