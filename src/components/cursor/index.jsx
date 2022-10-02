import { useLayoutEffect, useRef } from "react";

import { StyledCursor } from "../../setup/styled_components/styled_component";
const Cursor = ({darkModeButtonPosition,mainPostion}) => {
        const cursorRef = useRef(null);
        const onMouseMove = (event) => {
                const { clientX, clientY } = event;
                cursorRef.current.style.left = `${clientX-15}px`;
                cursorRef.current.style.top = `${clientY-15}px`;
                // console.log('mainPostion: ', mainPostion);
                // console.log('clientX: ', clientX);
                // console.log('clientY: ', clientY);
                // if (clientX > mainPostion.x&&clientY > mainPostion.y&&clientX<mainPostion.right&&clientY<mainPostion.bottom) {
                //         cursorRef.current.style.opacity = 0;
                //         console.log(`enter`);
                // }else{
                //         cursorRef.current.style.opacity = 1;
                //         console.log('out');
                // }
                
        };

        useLayoutEffect(() => {
                //FIXME? wheny mainPostion inside is undefind and outside is declared
                console.log('mainPostion: ', mainPostion);
                document.addEventListener("mousemove", onMouseMove);
                return () => {
                        document.removeEventListener("mousemove", onMouseMove);
                };
        }, []);
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
