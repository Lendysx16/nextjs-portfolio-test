"use client";
import { CSSProperties } from "react";
import { TypeAnimation } from "react-type-animation";

interface PropsForAnimation {
    sequence: Array<string | number>;
    speed: any;
    style?: CSSProperties;
}

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
