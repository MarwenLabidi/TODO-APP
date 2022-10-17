import { useLayoutEffect, useRef } from "react";

import { StyledCursor } from "../../setup/styled_components/styled_component";
const Cursor = ({darkModeButtonPosition,mainPostion,footerPosition,loginButtonPosition,menuButtonPosition}) => {
        
        const cursorRef = useRef(null);
        const onMouseMove = (event) => {
                const { clientX, clientY } = event;
                cursorRef.current.style.left = `${clientX-15}px`;
                cursorRef.current.style.top = `${clientY-15}px`;
                if ((clientX > mainPostion.x&&clientY > mainPostion.y&&clientX<mainPostion.right&&clientY<(mainPostion.bottom+10))||(clientX>darkModeButtonPosition.x&&clientY>darkModeButtonPosition.y&&clientX<darkModeButtonPosition.right&&clientY<darkModeButtonPosition.bottom)||(clientX>(loginButtonPosition.x-10)&&clientY>darkModeButtonPosition.y&&clientX<loginButtonPosition.right&&clientY<darkModeButtonPosition.bottom)) {
                        cursorRef.current.style.opacity = 0;
                }else{
                        cursorRef.current.style.opacity = 1;
                }
                
        };

        useLayoutEffect(() => {
                document.addEventListener("mousemove", onMouseMove);
                return () => {
                        document.removeEventListener("mousemove", onMouseMove);
                };
        }, [mainPostion]);
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
