import logo from './logo.svg';
import './App.css';
import img from './img.png';
import {useEffect, useRef, useState} from "react";
function App() {

    const timer=useRef(null)
    const [hour,setHour]=useState(24)
    const [minute,setMinute]=useState(0)
    const [second,setSecond]=useState(0)
   const countFun = () => {

          let  sys_second = 60*60*24*1000
        timer.current = setInterval(() => {
            //防止倒计时出现负数
            if (sys_second > 1000) {
                sys_second -= 1000;

                let hour = Math.floor((sys_second / 1000 / 3600) % 24);
                let minute = Math.floor((sys_second / 1000 / 60) % 60);
                let second = Math.floor(sys_second / 1000 % 60);

                setHour(hour < 10 ? "0" + hour : hour)
                setMinute(minute < 10 ? "0" + minute : minute)
                setSecond(second < 10 ? "0" + second : second)
            } else {
                clearInterval(timer.current);
                //倒计时结束时触发父组件的方法
                //this.props.timeEnd();
            }
        }, 1000);
    }

    useEffect(()=>{
      countFun();
      return ()=>{
          clearInterval(timer.current);
      }
    },[])
  return (
    <div className="App">
        <div className='App-header'>
            <div className='Count-down'>Ends in<div className='square'>{hour}</div> h <div  className='square'> {minute} </div>m<div  className='square'>{second}</div> s </div>
        </div>
    </div>
  );
}

export default App;
