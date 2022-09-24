import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';

function CoordinateSetup() {
    const [num,setNum]= React.useState(0);
    const [pos, setPos] = React.useState({
        x: '',
        y: '',
    });
    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setPos({
                x: e.clientX,
                y: e.clientY
            })
        })
    }, [pos])


    return (
        <div>
            <p>You clicked {num} times </p>
            <div><button style={{width:"100px"}} onClick={()=>setNum(num+1)}>Click me</button></div>
            <div> Client X{pos.x}</div>
            <div>Client Y{pos.y}</div>
        </div>

    )
}

export default CoordinateSetup;


reportWebVitals();