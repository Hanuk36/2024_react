import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ex01 from './step09_list/Ex01';
import reportWebVitals from './reportWebVitals';
import Ex02 from './step09_list/Ex02';
import NameForm from './step10_form/nameForm';
// import Library from './step01_jsx/Library';
// import Clock from './step02_element/Clock';
// import Welcome from './step03_component/Welcome';
// import Comment from './step03_component/Comment';
// import CommentList from './step03_component/CommentList';
// import NotificationList from './step04_state/NotificationList';
// import Count from './step04_state/Count';
// import Customer from './step05_prop/Customer';
// import BookList from './step05_prop/BookList';
// import Books from './static-data/Books';
// import Counter from './step06_hook/Counter';
// import Counter2 from './step06_hook/Counter2';
// import Counter3 from './step06_hook/Counter3';
// import Counter4 from './step06_hook/Counter4';
// import SmartHome from './step06_hook/SmartHome';
// import SmartHome2 from './step06_hook/SmartHome2';
// import TextInput from './step06_hook/TextInput';
// import VideoExam from './step06_hook/VideoExam';
// import Sample01 from './step07_event/Sample01';
// import Sample02 from './step07_event/Sample02';
// import Sample03 from './step07_event/Sample03';
// import Sample04 from './step07_event/Sample04';
// import Sample05 from './step07_event/Sample05';
// import Ex01 from './step08_condition/Ex01';
// import Ex03 from './step08_condition/Ex03';
// import Ex04 from './step08_condition/Ex04';
// import Ex05 from './step08_condition/Ex05';
// import Ex06 from './step08_condition/Ex06';
// import Ex07 from './step08_condition/Ex07';


const root = ReactDOM.createRoot(document.getElementById('root'));

//UI 를 업데이트하는 유잉한 방법은 새로운 앨리먼트를 새성하고...
// setInterval(()=>
//   root.render(
//     <React.StrictMode>
//       {/* <App /> */}
//       {/* <Library /> */}
//       <Clock />
//     </React.StrictMode>
// ),1000);


root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library /> */}
    {/* <Clock /> */}

      {/* <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />  */}

      {/* <Comment /> */}
      {/* <CommentList /> */}
      {/* <NotificationList /> */}
      {/* <Count/> */}

      {/* <Customer id="12fdamb@gmail.com" name="Choi" orders={['A001', 'B002', 'C003']} /> */}

      {/* <BookList books={Books}/> */}

      {/* <Counter /> */}
      {/* <Counter2 />  */}
      {/* <Counter3 /> */}
      {/* <Counter4 />  */}
      {/* <SmartHome /> */}
      {/* <SmartHome2 /> */}
      {/* <TextInput /> */}
      {/* <VideoExam /> */}
      {/* <Sample01 /> */}
      {/* <Sample02/> */}
      {/* <Sample03/> */}
      {/* <Sample04 /> */}
      {/* <Sample05 /> */}



      {/* <Ex01 isLoggedin=""/> => false */}
      {/* <Ex01 isLoggedin="내용"/> => true */}
      {/* <Ex01 isLoggedin={false} /> */}
      {/* <Ex03 /> */}
      {/* <Ex04 msg={[]} /> */}
      {/* <Ex04 msg={[1,2]} /> */}
      {/* <Ex05 /> */}
      {/* <Ex06 /> */}
      {/* <Ex07 /> */}
      {/* <Ex01 arr={[1,2,3,4,5]} /> */}
      {/* <Ex02 /> */}
      <NameForm />
      {/* <SelectForm /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
