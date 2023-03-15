var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TimeList from "./compo/TimeList";
var TimeTableBox = function (_a) {
    var startNum = _a.startNum, endNum = _a.endNum, maxTime = _a.maxTime, complete = _a.complete, onClick = _a.onClick;
    var _b = useState(-1), isOnFocus = _b[0], setIsFocus = _b[1];
    var _c = useState([-1, null]), clickTime = _c[0], setClickTime = _c[1];
    var _d = useState(complete), completeReser = _d[0], setCompletaeReser = _d[1];
    var arrayList = Array(endNum - startNum)
        .fill(0)
        .map(function (_, i) { return startNum + i; });
    var startTimeSet = clickTime[0], endTimeSet = clickTime[1];
    var _e = useState(), nearbyCompleteTime = _e[0], setNearbyCompleteTime = _e[1];
    var TimeListSetting = function (el) {
        console.log(nearbyCompleteTime);
        if (endTimeSet === null) {
            if (startTimeSet === -1) {
                setClickTime([el, null]);
            }
            else if (nearbyCompleteTime && el > nearbyCompleteTime) {
                setClickTime([clickTime[0], null]);
            }
            else if (el > startTimeSet && el < startTimeSet + maxTime) {
                setClickTime([clickTime[0], el]);
                setNearbyCompleteTime(null);
            }
            else if (el === startTimeSet) {
                setClickTime([-1, null]);
            }
        }
        else {
            setClickTime([el, null]);
        }
    };
    var IsActive = function (time) {
        if (endTimeSet !== null) {
            if (time > startTimeSet && time < endTimeSet) {
                return true;
            }
        }
        else {
            if (isOnFocus && startTimeSet) {
                if (time <= isOnFocus &&
                    time > startTimeSet &&
                    time < startTimeSet + maxTime) {
                    if (nearbyCompleteTime) {
                        console.log(time < nearbyCompleteTime);
                        if (time < nearbyCompleteTime)
                            return true;
                        else
                            return false;
                    }
                    return true;
                }
                return false;
            }
        }
    };
    useEffect(function () {
        for (var i = startTimeSet; i < startTimeSet + maxTime; i++) {
            if (completeReser && (completeReser === null || completeReser === void 0 ? void 0 : completeReser.indexOf(i)) !== -1) {
                setNearbyCompleteTime(i);
                break;
            }
            setNearbyCompleteTime(null);
        }
    }, [startTimeSet]);
    useEffect(function () {
        onClick(clickTime);
    }, [clickTime]);
    return (_jsx(TableWrap, { children: arrayList.map(function (el, idx) { return (_jsx(TimeList, { onMouseEnter: function () { return setIsFocus(el); }, onMouseLeave: function () { return setIsFocus(-1); }, onClick: function () {
                return completeReser && (completeReser === null || completeReser === void 0 ? void 0 : completeReser.indexOf(el)) !== -1
                    ? null
                    : TimeListSetting(el);
            }, className: completeReser && completeReser.indexOf(el) !== -1
                ? "disabled"
                : startTimeSet === el
                    ? "startTime"
                    : endTimeSet === el
                        ? "endtime"
                        : IsActive(el)
                            ? "hoveractive"
                            : "", time: el }, idx)); }) }));
};
export default TimeTableBox;
var TableWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n"], ["\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n"])));
var templateObject_1;
