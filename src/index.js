import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './step01_jsx/Library';
import Clock from './step02_element/Clock';
import Welcome from './step03_component/Welcome';
import Comment from './step03_component/Comment';
import CommentList from './step03_component/CommentList';
import NotificationList from './step04_state/NotificationList';

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
      <NotificationList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
