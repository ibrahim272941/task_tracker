import React from 'react'

function Button({color,text, handleClick ,toggleShow}) {

    // const handleClick = ()=>{
    //     console.log('click');
    // }
    return (
        <div>
            <button style={{background: color}} className='btn' onClick={toggleShow}>{text}</button>
        </div>
    )
}

export default Button
