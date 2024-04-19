import React from "react";
// class Sample01 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={isToogleOn: true};

//         // 클래스 컴포넌트에서는 바인딩 함수는 필수적으로 해줘야 한다.
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState(prevState =>({
//             isToogleOn : !prevState.isToogleOn
//         }));
//     }

//     render(){
//         return(
//             //<button onClick={}>눌러주세요</button>
//             <button onClick={this.handleClick}>{this.state.isToogleOn ? '커짐' : '꺼짐'}</button>
//         )
//     }
// }
class Sample01 extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn : true};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () =>{
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }));
    }
    render(){

        return(
            <button onClick={this.handleClick}> {this.state.isToggleOn ? '커짐' : '꺼짐'} </button>
        )
    }
}

export default Sample01;