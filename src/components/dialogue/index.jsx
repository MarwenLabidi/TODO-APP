import styled from "styled-components";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import { playSound } from "../../utils/utils";

const Dialogue = ({}, ref) => {
        return createPortal(
                <StyledDialogue ref={ref}>
                        <section>
                                <div className='header'>
                                <svg onClick={()=>{playSound('/sounds/buttons.mp3');}} className='closeIcon' xmlns="http://www.w3.org/2000/svg" ><path  fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                                </div>
                                <div className='buttonSection'>
                                        <motion.button onClick={()=>{playSound('/sounds/buttons.mp3');}} whileTap={{ scale: 0.9 }} >
                                                <svg
                                                        width='50'
                                                        height='50'
                                                        viewBox='0 0 115 115'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                                fill-rule='evenodd'
                                                                clip-rule='evenodd'
                                                                d='M98.9001 58.4802C98.9001 55.4222 98.6257 52.4819 98.1161 49.6591H57.5002V66.3407H80.7092C79.7095 71.7313 76.6712 76.2986 72.1038 79.3566V90.177H86.0411C94.1956 82.6694 98.9001 71.6137 98.9001 58.4802Z'
                                                                fill='#4285F4'
                                                        />
                                                        <path
                                                                fill-rule='evenodd'
                                                                clip-rule='evenodd'
                                                                d='M57.5 100.625C69.1437 100.625 78.9057 96.7634 86.0409 90.177L72.1037 79.3566C68.242 81.9441 63.3023 83.473 57.5 83.473C46.2679 83.473 36.7608 75.887 33.3696 65.6938H18.9619V76.8671C26.0579 90.9611 40.642 100.625 57.5 100.625Z'
                                                                fill='#34A853'
                                                        />
                                                        <path
                                                                fill-rule='evenodd'
                                                                clip-rule='evenodd'
                                                                d='M33.3695 65.6938C32.507 63.1063 32.017 60.3423 32.017 57.5C32.017 54.6577 32.507 51.8938 33.3695 49.3063V38.133H18.9618C16.0411 43.9548 14.3749 50.5412 14.3749 57.5C14.3749 64.4588 16.0411 71.0452 18.9618 76.8671L33.3695 65.6938Z'
                                                                fill='#FBBC05'
                                                        />
                                                        <path
                                                                fill-rule='evenodd'
                                                                clip-rule='evenodd'
                                                                d='M57.5 31.527C63.8315 31.527 69.5162 33.7029 73.9855 37.9762L86.3545 25.6071C78.8861 18.6483 69.1241 14.375 57.5 14.375C40.642 14.375 26.0579 24.039 18.9619 38.133L33.3696 49.3063C36.7608 39.1131 46.2679 31.527 57.5 31.527Z'
                                                                fill='#EA4335'
                                                        />
                                                </svg>
                                                <p>Login via Google</p>
                                        </motion.button>
                                        <motion.button className='buttonMeta'onClick={()=>{playSound('/sounds/buttons.mp3');}} whileTap={{ scale: 0.9 }} >
                                                <svg
                                                        width='40'
                                                        height='40'
                                                        viewBox='0 0 108 101'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                                d='M101.833 0.859375L60.375 31.651L68.0417 13.4844L101.833 0.859375Z'
                                                                fill='#E2761B'
                                                                stroke='#E2761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M6.12505 0.859375L47.25 31.9427L39.9584 13.4844L6.12505 0.859375Z'
                                                                fill='#E4761B'
                                                                stroke='#E4761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M86.9168 72.2344L75.8751 89.151L99.5001 95.651L106.292 72.6094L86.9168 72.2344Z'
                                                                fill='#E4761B'
                                                                stroke='#E4761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M1.74998 72.6094L8.49998 95.651L32.125 89.151L21.0833 72.2344L1.74998 72.6094Z'
                                                                fill='#E4761B'
                                                                stroke='#E4761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M30.7917 43.6511L24.2083 53.6094L47.6667 54.6511L46.8333 29.4427L30.7917 43.6511Z'
                                                                fill='#E4761B'
                                                                stroke='#E4761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M77.1666 43.6511L60.9166 29.1511L60.375 54.6511L83.7916 53.6094L77.1666 43.6511Z'
                                                                fill='#E4761B'
                                                                stroke='#E4761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M32.1251 89.1511L46.2084 82.2761L34.0417 72.7761L32.1251 89.1511Z'
                                                                fill='#E4761B'
                                                                stroke='#E4761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M61.7501 82.2761L75.8751 89.1511L73.9167 72.7761L61.7501 82.2761Z'
                                                                fill='#E4761B'
                                                                stroke='#E4761B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M75.8751 89.1511L61.7501 82.2761L62.8751 91.4844L62.7501 95.3594L75.8751 89.1511Z'
                                                                fill='#D7C1B3'
                                                                stroke='#D7C1B3'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M32.125 89.1511L45.25 95.3594L45.1667 91.4844L46.2083 82.2761L32.125 89.1511Z'
                                                                fill='#D7C1B3'
                                                                stroke='#D7C1B3'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M45.4583 66.6927L33.7083 63.2344L42 59.4427L45.4583 66.6927Z'
                                                                fill='#233447'
                                                                stroke='#233447'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M62.5 66.6927L65.9583 59.4427L74.2916 63.2344L62.5 66.6927Z'
                                                                fill='#233447'
                                                                stroke='#233447'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M32.1251 89.151L34.1251 72.2344L21.0834 72.6094L32.1251 89.151Z'
                                                                fill='#CD6116'
                                                                stroke='#CD6116'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M73.8751 72.2344L75.8751 89.151L86.9167 72.6094L73.8751 72.2344Z'
                                                                fill='#CD6116'
                                                                stroke='#CD6116'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M83.7917 53.6094L60.375 54.651L62.5417 66.6927L66 59.4427L74.3334 63.2344L83.7917 53.6094Z'
                                                                fill='#CD6116'
                                                                stroke='#CD6116'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M33.7084 63.2344L42.0418 59.4427L45.4584 66.6927L47.6668 54.651L24.2084 53.6094L33.7084 63.2344Z'
                                                                fill='#CD6116'
                                                                stroke='#CD6116'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M24.2084 53.6094L34.0417 72.776L33.7084 63.2344L24.2084 53.6094Z'
                                                                fill='#E4751F'
                                                                stroke='#E4751F'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M74.3333 63.2344L73.9166 72.776L83.7916 53.6094L74.3333 63.2344Z'
                                                                fill='#E4751F'
                                                                stroke='#E4751F'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M47.6667 54.651L45.4583 66.6927L48.2083 80.901L48.8333 62.1927L47.6667 54.651Z'
                                                                fill='#E4751F'
                                                                stroke='#E4751F'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M60.3749 54.651L59.2499 62.151L59.7499 80.901L62.5416 66.6927L60.3749 54.651Z'
                                                                fill='#E4751F'
                                                                stroke='#E4751F'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M62.5417 66.6927L59.75 80.9011L61.75 82.2761L73.9167 72.7761L74.3333 63.2344L62.5417 66.6927Z'
                                                                fill='#F6851B'
                                                                stroke='#F6851B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M33.7083 63.2344L34.0417 72.7761L46.2083 82.2761L48.2083 80.9011L45.4583 66.6927L33.7083 63.2344Z'
                                                                fill='#F6851B'
                                                                stroke='#F6851B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M62.75 95.3594L62.875 91.4844L61.8333 90.5677H46.125L45.1667 91.4844L45.25 95.3594L32.125 89.151L36.7083 92.901L46 99.3594H61.9583L71.2917 92.901L75.875 89.151L62.75 95.3594Z'
                                                                fill='#C0AD9E'
                                                                stroke='#C0AD9E'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M61.7499 82.276L59.7499 80.901H48.2082L46.2082 82.276L45.1666 91.4844L46.1249 90.5677H61.8332L62.8749 91.4844L61.7499 82.276Z'
                                                                fill='#161616'
                                                                stroke='#161616'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M103.583 33.651L107.125 16.651L101.833 0.859375L61.75 30.6094L77.1667 43.651L98.9583 50.026L103.792 44.401L101.708 42.901L105.042 39.8594L102.458 37.8594L105.792 35.3177L103.583 33.651Z'
                                                                fill='#763D16'
                                                                stroke='#763D16'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M0.875 16.651L4.41667 33.651L2.16667 35.3177L5.5 37.8594L2.95833 39.8594L6.29167 42.901L4.20833 44.401L9 50.026L30.7917 43.651L46.2083 30.6094L6.125 0.859375L0.875 16.651Z'
                                                                fill='#763D16'
                                                                stroke='#763D16'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M98.9584 50.026L77.1667 43.651L83.7917 53.6094L73.9167 72.776L86.9167 72.6094H106.292L98.9584 50.026Z'
                                                                fill='#F6851B'
                                                                stroke='#F6851B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M30.7916 43.651L8.99991 50.026L1.74991 72.6094H21.0832L34.0416 72.776L24.2082 53.6094L30.7916 43.651Z'
                                                                fill='#F6851B'
                                                                stroke='#F6851B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                        <path
                                                                d='M60.375 54.651L61.7499 30.6094L68.0833 13.4844H39.9583L46.2083 30.6094L47.6666 54.651L48.1666 62.2344L48.2083 80.901H59.75L59.8333 62.2344L60.375 54.651Z'
                                                                fill='#F6851B'
                                                                stroke='#F6851B'
                                                                stroke-width='1.32812'
                                                                stroke-linecap='round'
                                                                stroke-linejoin='round'
                                                        />
                                                </svg>
                                                <p>Login via MetaMask</p>
                                        </motion.button>
                                </div>
                        </section>
                </StyledDialogue>,
                document.body
        );
};

export default forwardRef(Dialogue);

const StyledDialogue = styled(motion.dialog)`
        width: 400px;
        height: 400px;
        margin: auto;
        padding: 0;
        position: fixed;
        inset: 0;
        z-index: var(--layer-important);
        background-color: ${({ theme }) => theme.input};
        border-radius: 10px;
        section {
                height: 80%;
                width: 100%;
                .header {
                        display: flex;
                        justify-content: end;
                        .closeIcon{
                                width: 30px;
                                height: 30px;
                                fill:${({ theme }) => theme.text};
                                padding-top:10px;
                                &:hover{
                                        cursor:pointer;
                                }
                        }
                }
                .buttonSection {
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 30px;
                        button {
                                box-sizing: border-box;

                                /* Auto layout */

                                display: flex;
                                justify-content: space-around;
                                align-items: center;
                                padding: 14px 16px;
                                /* gap: 8px; */

                                width: 250px;
                                height: 60px;

                                background: ${({ theme }) => theme.body};
                                color:${({ theme }) => theme.text};
                                border: 1px solid #4285f4;
                                box-shadow: 0px 4px 0px #4285f4;
                                border-radius: 4px;
                                &:hover{
                                        cursor:pointer;
                                }
                                &:active{
                                        cursor:pointer;
                                        box-shadow: 0px 4px 0px transparent;

                                }
                        }
                        .buttonMeta{
                                border-color: orange;
                                box-shadow: 0px 4px 0px orange;


                        }
                }
        }

        &::backdrop {
                background-color: ${({ theme }) => theme.text};
                opacity: 0.5;
        }
        &:not([open]) {
                pointer-events: none;
                opacity: 0;
        }
`;
