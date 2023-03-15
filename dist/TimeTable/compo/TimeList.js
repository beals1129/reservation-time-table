var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
var TimeList = function (_a) {
    var time = _a.time, className = _a.className, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onClick = _a.onClick;
    return (_jsxs(List, __assign({ onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onClick: onClick, className: className }, { children: [time, " : 00 ~ ", _jsx("br", {}), " ", time + 1, " : 00"] })));
};
export default TimeList;
var List = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 15px 35px;\n  line-height: 1.5;\n  background-color: #ebf1f9;\n  border-right: 1px solid #d9d9d9;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  &.startTime {\n    background-color: #78aaff;\n    color: white;\n  }\n  &.endtime {\n    background-color: #78aaff;\n    color: white;\n  }\n  &.hoveractive {\n    background-color: #b4cfff;\n    color: #052253;\n  }\n  &.disabled {\n    background-color: #d9d9d9;\n    color: #979797;\n  }\n"], ["\n  padding: 15px 35px;\n  line-height: 1.5;\n  background-color: #ebf1f9;\n  border-right: 1px solid #d9d9d9;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  &.startTime {\n    background-color: #78aaff;\n    color: white;\n  }\n  &.endtime {\n    background-color: #78aaff;\n    color: white;\n  }\n  &.hoveractive {\n    background-color: #b4cfff;\n    color: #052253;\n  }\n  &.disabled {\n    background-color: #d9d9d9;\n    color: #979797;\n  }\n"])));
var templateObject_1;
