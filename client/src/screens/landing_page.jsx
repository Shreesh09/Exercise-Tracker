import {useEffect, useLayoutEffect, useRef, useState} from "react";
import Spline from '@splinetool/react-spline';
import './styles/landing_page_styles.css'
import {gsap} from "gsap";

function Navbar() {
    return (
        <div id={"Navbar"}>
            <h3>CHAD</h3><a id={"signuptext"}>Signup</a><a id={"logintext"}>Login</a>
        </div>
    );
}

function Text(){
    return (
        <div id={"Text"}>
            <h1>TRACK</h1>
            <h1>YOUR</h1>
            <h1>WORKOUTS</h1>
        </div>
    );
}

function Arm() {
    const [arm, setArm] = useState();
    useLayoutEffect(
        () => {
            if(!arm)
                return;
            gsap.set(arm.scale, { x: 2.2, y: 2.2, z: 2.2 });
            gsap.set(arm.position, { x: -110, y: 380 });
        },
        [arm]
    );
    function onLoad(spline) {
        setArm(spline.findObjectByName('arm'))
    }

    return(
        <div id={"Arm"}>
            <Spline onLoad={onLoad} scene="https://prod.spline.design/dByJznS-hnkY8WiL/scene.splinecode" />

        </div>
    );
}

function BarGraph() {
    return (
        <div id={"graph"}>
            <svg id={"line"} width="450" height="281" viewBox="0 0 690 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 222C4 222 135.15 289.892 200 268.5C392.5 205 672.5 26 672.5 26" stroke="#4E3640" strokeWidth="13"/>
                <path d="M689.695 19.2603C690.383 16.0403 688.296 12.8658 685.035 12.1697L631.888 0.826661C628.627 0.130595 625.426 2.17664 624.739 5.39664C624.052 8.61663 626.138 11.7912 629.4 12.4873L676.641 22.57L666.686 69.2125C665.999 72.4325 668.085 75.607 671.347 76.3031C674.608 76.9992 677.809 74.9531 678.496 71.7331L689.695 19.2603ZM642.296 51.6439L687.086 23.0138L680.495 12.9862L635.704 41.6162L642.296 51.6439Z" fill="#4E3640"/>
            </svg>

            <div id={"barBox"}>
                <div id={"bar1"}></div>
                <div id={"bar2"}></div>
                <div id={"bar3"}></div>
                <div id={"bar4"}></div>
                <div id={"bar5"}></div>
            </div>
        </div>
    )
}

function GetStarted() {
    return(
        <div>
            <button id={"getStartedButton"}>Get Started</button>
        </div>
    );
}

export default function LandingPage() {
    return (
        <div id={"body"}>
            <Navbar/>
            <div id={"ContentBox"}>
                <Text/>
                <Arm/>
                <BarGraph/>
            </div>
            <GetStarted/>
        </div>
    );
}