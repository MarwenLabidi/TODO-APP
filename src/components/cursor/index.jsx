import { useEffect, useRef } from "react";

import { StyledCursor } from "../../setup/styled_components/styled_component";

const Cursor = () => {
        const cursorRef = useRef(null);
        const onMouseMove = (event) => {
                const { clientX, clientY } = event;
                cursorRef.current.style.left = `${clientX-15}px`;
                cursorRef.current.style.top = `${clientY-10}px`;
        };

        useEffect(() => {
                document.addEventListener("mousemove", onMouseMove);
                return () => {
                        document.removeEventListener("mousemove", onMouseMove);
                };
        },[]);
        return (
                <StyledCursor
                        ref={cursorRef}
                        animate={{ scale: [1, 0.8, 1] }}
                        transition={{
                                duration: 2,
                                loop: Infinity,
                                type: "tween",
                        }}></StyledCursor>
        );
};

export default Cursor;
