/* eslint-disable jsx-a11y/alt-text */
import React, { createElement, useState } from 'react'
import './Calendar.css'
import arrowleft from './img/leftaroow.png'
import arrowright from './img/rightaroow.png'
export default function Calendar() {

  const monthLimit = [31,28,31,30,31,30,31,31,30,31,30,31]
  const dayOfWeek = ['sun','mon','tue','wed','thu','fri','sat']
  const daySpace = document.querySelector("#daySpace")
  const monthStsrt = [0,3,3,6,1,4,6,2,5,0,3,5]
  const toDay = new Date()
  let [nowmonth,changMonth] = useState(toDay.getMonth()+1);
  let [nowDay,changeDay] = useState(toDay.getDate())
  const realMonth = toDay.getMonth()+1
  const realDate = toDay.getDate()

  function clickLeft() {                                                        //왼쪽클릭을 한 경우
    if (nowmonth<=1) {                                                          //현제 페이지가 1 이하일때는 무시한다
      return;   
    }
    else{
      changMonth(nowmonth-1)                                                      //현제페이지를 하나 내린다
      for (let count = 1; count <= 12; count++) {
        if (nowmonth === count+1) {
          const checkMonthDateMany = monthLimit[count-1]
          removeClassElements("dayicon")                                              //class가 dayicon인 엘레멘트를 모두 제거한다 
          for (let i = 1; i <= checkMonthDateMany; i++) {
            makedays(i)
          }
        }   
      }
    }
  }

  function clickRight() {
    if (nowmonth>=12) {
      return;
    }
    else {
      changMonth(nowmonth+1)
      for (let counter = 0; counter <= 12; counter++) {
        if (nowmonth === counter-1) {
          console.log(`nowmonth is ${counter}`);
          const checkMonthDateMany = monthLimit[counter-1]
          removeClassElements("dayicon")
          for (let i = 1; i <= checkMonthDateMany; i++) {
            makedays(i)
          }
        }    
      }
    }
  }

  function makedayLogic(월변화값,) {
    changMonth(nowmonth+월변화값)
    removeClassElements("dayicon")
    for (let counter = 0; counter <= 12; counter++) {
      if (nowmonth === counter-1) {
        const checkMonthDateMany = monthLimit[counter-1]
        for (let i = 1; i <= checkMonthDateMany; i++) {
          makedays(i)
        }
      }    
    }
  }


  function makedays(i) {
    const dayicon = document.createElement('div')
    const daynum = document.createElement('span')
    daySpace.appendChild(dayicon)
    dayicon.appendChild(daynum)
    daynum.innerText = i
    dayicon.classList.add("dayicon")
    daynum.classList.add("daynum")
    // console.log(daySpace);
  }

  function removeClassElements(className) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
      element.remove();
    })
  }

  function roadday() {
      console.log("road");
  }

  window.addEventListener("load",roadday)

  return (
      <>
        <div id='calBody'>
          
          <div id='Header'>
            <div id='calTitle'>
              <h2 style={{margin:"0",marginTop:"5px", fontFamily:'GmarketSansMedium'}}>Q-calendar</h2>
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