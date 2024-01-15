"use client";
import { useEffect, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";

interface styles extends React.CSSProperties {}
interface PropsForAnimation {
    sequence: Array<string | number>;
    speed: any;
    style?: styles;
}
const t: styles = { fontSize: "2em", display: "inline-block" };
const TypeAnimationComponent = ({
    sequence,
    speed,
    style,
}: PropsForAnimation) => {
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={speed}
            style={style}
            repeat={Infinity}
        />
    );
};

export default TypeAnimationComponent;
