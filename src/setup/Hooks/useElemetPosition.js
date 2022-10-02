import { useState, useLayoutEffect } from "react";

export default function useElementPosition(el) {
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
