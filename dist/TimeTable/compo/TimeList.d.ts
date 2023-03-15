/// <reference types="react" />
interface TimeListProps {
    time: number;
    className: string;
    onMouseEnter: () => any;
    onMouseLeave: () => any;
    onClick: () => any;
}
declare const TimeList: ({ time, className, onMouseEnter, onMouseLeave, onClick, }: TimeListProps) => JSX.Element;
export default TimeList;
