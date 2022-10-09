import { useLayoutEffect, useRef } from "react";

import { StyledCursor } from "../../setup/styled_components/styled_component";
const Cursor = ({darkModeButtonPosition,mainPostion,footerPosition,loginButtonPosition,menuButtonPosition}) => {
        console.log('darkModeButtonPosition: ', darkModeButtonPosition);
        console.log('loginButtonPosition: ', loginButtonPosition);
        const cursorRef = useRef(null);
        const onMouseMove = (event) => {
                const { clientX, clientY } = event;
                cursorRef.current.style.left = `${clientX}px`;
                cursorRef.current.style.top = `${clientY}px`;
                if ((clientX > mainPostion.x&&clientY > mainPostion.y&&clientX<mainPostion.right&&clientY<(footerPosition.bottom+footerPosition.y+mainPostion.y+30))||(clientX>darkModeButtonPosition.x&&clientY>darkModeButtonPosition.y&&clientX<darkModeButtonPosition.right&&clientY<darkModeButtonPosition.bottom)||(clientX>loginButtonPosition.x&&clientY>darkModeButtonPosition.y&&clientX<loginButtonPosition.right&&clientY<darkModeButtonPosition.bottom)) {
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
