import {useCallback, useLayoutEffect, useState, createContext, useContext} from "react";
import Spline from '@splinetool/react-spline';
import '../styles//landing_page/landing_page_styles.css'
import {gsap} from "gsap";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";
import {Page3} from "./page3.jsx";
import Page4 from "./page4.jsx";

const timelineContext = createContext({});

function Arm({index}) {
    const [arm, setArm] = useState();
    const { addAnimation } = useContext(timelineContext);
    useLayoutEffect(
        () => {
            if(!arm)
                return;
            const ctx = gsap.context(() => {
                addAnimation(gsap.from("#Arm", {x:-1000}, {x: 0}), index)
                addAnimation(gsap.fromTo(arm.position, {x: -1000, y: 380}, {x: 20, y: 350}), ">");
                addAnimation(gsap.set(arm.scale, {x: 2.2, y: 2.2, z: 2.2}), "<");
            });

            return () => {
                ctx.revert();
            }
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

export default function LandingPage() {
    const [tl, setTl] = useState();
    const context = useContext(timelineContext);

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

    context.addAnimation = addAnimation;
    return (
        <div id={"body"}>
            <timelineContext.Provider value={context}>
                <Arm index={0}/>
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
            </timelineContext.Provider>
        </div>
    );
}

export {timelineContext};
