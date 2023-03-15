/// <reference types="react" />
interface Props {
    startNum: number;
    endNum: number;
    maxTime: number;
    complete?: number[];
    onClick?: any;
}
declare const TimeTableBox: ({ startNum, endNum, maxTime, complete, onClick, }: Props) => JSX.Element;
export default TimeTableBox;
