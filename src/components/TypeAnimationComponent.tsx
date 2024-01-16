"use client";
import { TypeAnimation } from "react-type-animation";
import { PropsForAnimation } from "@/types/types";

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
