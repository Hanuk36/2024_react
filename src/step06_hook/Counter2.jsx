import React, { useState } from "react";

function Counter2(props){
   
    const[count2, setCount2] = useState(0);

    const[name, setName] = useState('hong');
    
    function countUp(){
        setCount2(count2 + 1);
    }

    function changeName(){
        const newName = name === 'hong' ? 'kim' : 'hong';
        setName(newName);
    }

    return(
        <div>
            <div>{count2}</div>
            <button onClick={countUp}>증가</button>
            <hr />
            <h2>{name}</h2>
            <button onClick={changeName}>이름변경</button>
        </div>
    )
}

// function Counter2(props){
//     const [count2, setCount2] = useState(0);
//     const [name, setName] = useState('hong');

//     function countUp(){
//         setCount2(count2 + 1);
//     }
//     function changeName(){
//         const newName = name === 'hong' ? 'kim' : 'hong';
//         setName(newName);
//     }
//     return(
//         <div>
//             <div>{count2}</div>
//             <button onClick={countUp}>숫자</button>
//             <hr />
//             <div>{name}</div>
//             <button onClick={changeName}>이름</button>
//         </div>
//     )
// }


export default Counter2;