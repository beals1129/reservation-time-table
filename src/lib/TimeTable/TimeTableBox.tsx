import { timeEnd } from "console";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TimeList from "./compo/TimeList";

interface Props {
  startNum: number;
  endNum: number;
  maxTime: number;
  complete: number[];
}

const TimeTableBox = ({ startNum, endNum, maxTime, complete }: Props) => {
  const [isOnFocus, setIsFocus] = useState<number | undefined>(-1);
  const [clickTime, setClickTime] = useState<any>([-1, null]);

  const [completeReser, setCompletaeReser] = useState<any>(complete);

  const arrayList = Array(endNum - startNum)
    .fill(0)
    .map((_, i) => startNum + i);

  const [startTimeSet, endTimeSet] = clickTime;
  const [nearbyCompleteTime, setNearbyCompleteTime] = useState<any>();

  const TimeListSetting = (el: number) => {
    console.log(nearbyCompleteTime);
    if (endTimeSet === null) {
      if (startTimeSet === -1) {
        setClickTime([el, null]);
      } else if (nearbyCompleteTime && el > nearbyCompleteTime) {
        setClickTime([clickTime[0], null]);
      } else if (el > startTimeSet && el < startTimeSet + maxTime) {
        setClickTime([clickTime[0], el]);
        setNearbyCompleteTime(null);
      } else if (el === startTimeSet) {
        setClickTime([-1, null]);
      }
    } else {
      setClickTime([el, null]);
    }
  };

  const IsActive = (time: number) => {
    if (endTimeSet !== null) {
      if (time > startTimeSet && time < endTimeSet) {
        return true;
      }
    } else {
      if (isOnFocus && startTimeSet) {
        if (
          time <= isOnFocus &&
          time > startTimeSet &&
          time < startTimeSet + maxTime
        ) {
          if (nearbyCompleteTime) {
            console.log(time < nearbyCompleteTime);
            if (time < nearbyCompleteTime) return true;
            else return false;
          }
          return true;
        }
        return false;
      }
    }
  };
  useEffect(() => {
    for (let i = startTimeSet; i < startTimeSet + maxTime; i++) {
      if (completeReser.indexOf(i) !== -1) {
        setNearbyCompleteTime(i);

        break;
      }
      setNearbyCompleteTime(null);
    }
  }, [startTimeSet]);
  return (
    <TableWrap>
      {arrayList.map((el, idx) => (
        <TimeList
          key={idx}
          onMouseEnter={() => setIsFocus(el)}
          onMouseLeave={() => setIsFocus(-1)}
          onClick={() =>
            completeReser.indexOf(el) !== -1 ? null : TimeListSetting(el)
          }
          className={
            completeReser.indexOf(el) !== -1
              ? "disabled"
              : startTimeSet === el
              ? "startTime"
              : endTimeSet === el
              ? "endtime"
              : IsActive(el)
              ? "hoveractive"
              : ""
          }
          time={el}
        />
      ))}
    </TableWrap>
  );
};

export default TimeTableBox;

const TableWrap = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;
