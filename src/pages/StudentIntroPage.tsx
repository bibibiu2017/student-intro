import React from 'react';
import "./student-intro-page.scss"
import handIcon from "../Saly-25.svg"
import checkIcon from "../check.svg"
import starSmall from "../star.svg";
import timesIcon from "../times.svg";
import studentIcon from "../Avatar Placeholder.svg"
import {testSteps} from "./studenIntorReportData";

const StudentIntroPage = () => {
  return (
    <div className={"intro"}>
      <div className={"intro-header"}>
        <img src={timesIcon} alt="cancel icon"/>
        <div>ADT</div>
        <img src={studentIcon} alt="student avatar"/>
      </div>
      <div className={"intro-body"}>
        <img className={"intro-icon"} src={handIcon} alt={"Hand icon"}/>
        <div className={"intro-text-block"}>
          <div className={"mb-5"}>
            <div className={"heading-1"}>Hi there! 👋</div>
            <div className={"heading-1 mb-1"}>Are you ready to check your knowledge?</div>
            <div>Great news! Now you can see what your strenths are in Math!</div>
          </div>
          <div className={"mb-3"}>
            <div className={"heading-2 mb-2"}>Let’s see how Math Ability Test  works:</div>
            <div>With the results of this Math ability test:</div>
            <ul className={"list-padding"}>
              <li>you will learn about your stength and the areas to focus on</li>
              <li>your teachers and parents will be able to help you to progress</li>
            </ul>
          </div>
          <div className={"mb-6"}>
            <div className={"heading-2 mb-2"}>Step by step about the test:</div>
            {
              testSteps.map(step => (
                <div className={"test-steps"}>
                  <img src={checkIcon} alt="accept green"/>
                  <div>{step}</div>
                </div>
              ))
            }
          </div>
          <div className={"intro-card"}>
              <div className={"heading-2 color-green-dark"}>Good Luck!</div>
              <div className={"color-green"}>
                <span>Show how much you already understand and earn 5 </span>
                <img src={starSmall} alt="small star"/>
              </div>
          </div>
        </div>
      </div>
      <div className={"intro-footer"}>
        <button className={"intro-footer__button"}>Let’s Start</button>
      </div>
    </div>
  );
};

export default StudentIntroPage;