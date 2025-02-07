import React, { useEffect, useState } from "react";
import "./Timeout.css";

// import BG1 from "../../assets/img/17.jpg";
import { BgWithGradient } from "../BgWithGradient/BgWithGradient";

export const Timeout = () => {
  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime());

  function rename(str) {
    switch (str) {
      case "days":
        return "Дней";
      case "hours":
        return "Часов";
      case "minutes":
        return "Минут";
      case "seconds":
        return "Секунд";
      default:
        return;
    }
  }

  function addZero(num) {
    if (num === 0) {
      return `0${num}`;
    } else return num;
  }

  // to update the time every 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const timerComponents = [];

  /* traverse through the timeLeft Object
   * for making the timer UI component */
  Object.keys(timeLeft).forEach((interval) => {
    if (
      !timeLeft[interval] ||
      timeLeft[interval] == null ||
      timeLeft[interval] === undefined
    ) {
      return timerComponents.push(
        <span className={interval}>
          {0} <p className="timer-subtext">{rename(interval)}</p>{" "}
        </span>
      );
    }

    timerComponents.push(
      <span className={interval}>
        {timeLeft[interval] < 1 ? 0 : timeLeft[interval]}{" "}
        <p className="timer-subtext">{rename(interval)}</p>{" "}
      </span>
    );
  });

  console.log(timeLeft);

  /* main function for calculating the time remaining
   * from the current date */
  function calculateRemainingTime() {
    const year = new Date().getFullYear();

    var eventDate = `09/23/${year}`; // MM-DD-YYYY (31st Dec)

    /* difference holds the time difference in
     * milliseconds of the event date from the
     * current date. */
    const difference = +new Date(eventDate) - +new Date();
    let timeRemaining = {};

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeRemaining;
  }

  return (
    <>
      <div className="timerComponent">
        <div className="eventName">До свадьбы осталось:</div>
        <div className="timer">
          {timerComponents.length ? timerComponents : <span>00:00:00</span>}
        </div>
      </div>
      <BgWithGradient
        background="https://i.ibb.co/0ZJTMzK/17.jpg"
        gradient={"up"}
      />
    </>
  );
};
