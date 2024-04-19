import React, { useState } from "react";

function Counter(props){
    //let count = 0;
    // const[변수명, set변수명(대문자)] = useState(초기값); <= 기본형태

    const[count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            <button onClick={()=> {
                //count++;
                //console.log("count", count);
                setCount(count + 1);

            }}>클릭</button>
        </div>
    )
}

// function Counter(props){
//     const [count, setCount] = useState(0);

//     const handleClick = () =>{
//         setCount(count+1);
//     }
//     const handleClick2 = () =>{
//         setCount(count-1);
//     }

//     return(
//         <div>
//             <p>총 {count} 번 클릭</p>
//             <button onClick={handleClick}>+</button>
//             <button onClick={handleClick2}>-</button>
//         </div>
//     )
// }

export default Counter;