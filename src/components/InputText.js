import React from 'react';

const InputText = ({inputValue, onChange, placeholderText, type})=> {
    return (
        <>
            <input type={type} value={inputValue} placeholder={placeholderText} onChange={(e)=>onChange(e.target.value)}/>
        </>
    );
}

export default InputText;