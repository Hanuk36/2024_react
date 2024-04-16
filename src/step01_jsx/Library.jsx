import React from "react";
import Book from "./Book";

function Library(props) {
    return(
        <div>
            {/* Book 은 내가 만든 태그! 대문자 시작이라서.. */}
            {/* 컴포넌트 합성 */}
            <Book name="처음 만난 리액트" numOfPage="300"/>
            <Book name="처음 만난 스프링 부트" numOfPage="250"/>
            <Book name="처음 만난 VSCode" numOfPage="50"/>
        </div>
    );
}

export default Library;