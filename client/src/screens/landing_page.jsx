import {useCallback, useLayoutEffect, useState} from "react";
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

const Text = ({addAnimation, index})=> {
    useLayoutEffect(
        () => {
            const ctx = gsap.context(() => {
                const animation1 = gsap.fromTo("#track", {x: -1000}, {x: 0});
                addAnimation(animation1, index);
                const animation2 = gsap.fromTo("#your", {x: -1000}, {x: 0});
                addAnimation(animation2, ">");
                const animation3 = gsap.fromTo("#workouts", {x: -1000}, {x: 0});
                addAnimation(animation3, ">");

            });

            return () => ctx.revert();
        },
        [addAnimation, index]
    );
    return (
        <div id={"Text"}>
            <h1 id={"track"}>TRACK</h1>
            <h1 id={"your"}>YOUR</h1>
            <h1 id={"workouts"}>WORKOUTS</h1>
        </div>
    );
};

function Arm({ addAnimation, index}) {
    const [arm, setArm] = useState();
    useLayoutEffect(
        () => {
            if(!arm)
                return;
            const ctx = gsap.context(() => {
                addAnimation(gsap.fromTo("#Arm", {x:-1000}, {x: 0}), index)
                addAnimation(gsap.set(arm.scale, {x: 2.2, y: 2.2, z: 2.2}), "<");
                addAnimation(gsap.fromTo(arm.position, {x: -1000, y: 380}, {x: -110, y: 380}), ">");
            });

            return () => ctx.revert();
        },
        [arm, addAnimation, index]
    );

    return(
        <div id={"Arm"}>
            <Spline onLoad={
                (spline) => {
                setArm(spline.findObjectByName('arm'))
                }
            } scene="https://prod.spline.design/dByJznS-hnkY8WiL/scene.splinecode" />

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
    const [tl, setTl] = useState();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            setTl(tl);
        });
        return () => ctx.revert();
    }, []);

    const addAnimation = useCallback(
        (animation, index) => {
            tl && tl.add(animation, index);
        }, [tl]
    );
    return (
        <div id={"body"}>
            <Navbar/>
            <div id={"ContentBox"}>
                <Text addAnimation={addAnimation} index={">"}/>
                <Arm addAnimation={addAnimation} index={0}/>
                <BarGraph/>
            </div>
            <GetStarted/>
        </div>
    );
}


// <Arm addAnimation={addAnimation} index={0}/>