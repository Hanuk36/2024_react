import React, { useState } from "react";
import Ex06_Toolbar from "./Ex06_Toolbar";

function Ex06(props){
    const [isLoggedIn, setLoggedIn] = useState(false);

    const onClickLogin = () => {
        setLoggedIn(true);
    }

    const onClickLogout = () => {
        setLoggedIn(false);
    }

    return(
        <div>
            <Ex06_Toolbar 
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout ={onClickLogout}
            />
            <div>리엑트 공부~ </div>
        </div>
    )
}

export default Ex06;