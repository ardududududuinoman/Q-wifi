/* eslint-disable jsx-a11y/alt-text */
import React, { createElement, useState } from 'react'
import './Calendar.css'
import arrowleft from './img/leftaroow.png'
import arrowright from './img/rightaroow.png'
export default function Calendar() {

const monthLimit = [31,28,31,30,31,30,31,31,30,31,30,31]
const months = [1,2,3,4,5,6,7,8,9,10,11,12]
const dayOfWeek = ['sun','mon','tue','wed','thu','fri','sat']
const daySpace = document.querySelector("#daySpace")



const toDay = new Date()
let [nowmonth,changMonth] = useState(toDay.getMonth()+1);
let [nowDay,changeDay] = useState(toDay.getDate())

const realMonth = toDay.getMonth()+1
const realDate = toDay.getDate()


// console.log(Object.entries(monthLimit));
// console.log(nowmonth);
// console.log(nowDay);


// months.forEach(monthListEle => {
//   if (nowmonth === monthListEle+1) {
//     const checkMonth = monthListEle
//     const checkMonthDateMany = monthLimit[checkMonth-1]
//     for (let i = 1; i <= checkMonthDateMany; i++) {
//       console.log(i);
//       makedays(i)
//     }
//   }
// });


function clickLeft() {
  if (nowmonth<=1) {
    return;
  }
  else{
  removeClassElements("dayicon")  
  changMonth(nowmonth-1)
  months.forEach(monthListEle => {
    if (nowmonth === monthListEle+1) {
      const checkMonth = monthListEle
      const checkMonthDateMany = monthLimit[checkMonth-1]
      for (let i = 1; i <= checkMonthDateMany; i++) {
        console.log(i);
        makedays(i)
      }
    }
  });
}}


function clickRight() {
  if (nowmonth>=12) {
    return;
  }
  else{
  removeClassElements("dayicon")
  changMonth(nowmonth+1)
  months.forEach(monthListEle => {
    if (nowmonth+1 === monthListEle) {
      const checkMonth = monthListEle
      const checkMonthDateMany = monthLimit[checkMonth-1]
      for (let i = 1; i <= checkMonthDateMany; i++) {
        console.log(i);
        makedays(i)
      }
    }
  });
}}


function makedays(i) {
  var dayicon = document.createElement('div')
  var daynum = document.createElement('span')
  daynum.innerText = i
  dayicon.classList.add("dayicon")
  dayicon.appendChild(daynum)
  daySpace.appendChild(dayicon)
  console.log(daySpace);
}


function removeClassElements(className) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(element => {
    element.remove();
  });
}



return (
    <>
      <div id='calBody'>
        
        <div id='Header'>
          <div id='calTitle'>
            <h2 style={{margin:"0",marginTop:"5px", fontFamily:'GmarketSansMedium'}}>Q-calrender</h2>
          </div>
          <img onClick={() => (clickLeft())} className='arrow' src={arrowleft}/>
          <h1 style={{fontFamily:"OAGothic"}}>{nowmonth}</h1>
          <img onClick={() => (clickRight())} className='arrow' src={arrowright} alt=""/>
        </div>
        <div id='week'>
          <h6 style={{color:"#FFCCCC"}} className='weekdays'>sun</h6>
          <h6 className='weekdays'>mon</h6>
          <h6 className='weekdays'>tue</h6>
          <h6 className='weekdays'>wed</h6>
          <h6 className='weekdays'>thu</h6>
          <h6 className='weekdays'>fri</h6>
          <h6 className='weekdays'>sat</h6>
        </div>
        <div id='daySpace'></div>
      </div>
    </>
    )    
}




