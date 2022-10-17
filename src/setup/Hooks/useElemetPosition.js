import { useState, useLayoutEffect } from "react";

export default function useElementPosition(el) {
        // if el is undefined, return null
        function getElement(x, y,bottom,right) {
                return {
                        x: x,
                        y: y,
			bottom:bottom,
			right:right
                };
        }

        const [elementPosition, setElementPosition] = useState(getElement);

        useLayoutEffect(() => {
                function handlePosition() {
                        let element = el.current;
                        if(!element){ return};
                        let x = element.getBoundingClientRect().left
                        let y = element.getBoundingClientRect().top
			let bottom =element.getBoundingClientRect().bottom
			let right =element.getBoundingClientRect().right
                        setElementPosition(getElement(x, y,bottom,right));
                }
                handlePosition();
        }, [el]);

        return elementPosition;
}
