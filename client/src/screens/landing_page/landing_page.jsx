import {useCallback, useLayoutEffect, useState, createContext, useContext, useEffect} from "react";
import Spline from '@splinetool/react-spline';
import '../styles//landing_page/landing_page_styles.css'
import {gsap} from "gsap";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";
import {Page3} from "./page3.jsx";
import Page4 from "./page4.jsx";

const timelineContext = createContext({});

function Arm({index, wheel}) {
    const [forearm, setForearm] = useState();
    const [arm, setArm] = useState();
    const context = useContext(timelineContext);
    const {addAnimation} = context;

    useLayoutEffect(
        () => {
            if(!arm)
                return;
            context.setArm(arm);
            context.setForearm(forearm);
            const ctx = gsap.context(() => {
                    addAnimation(gsap.from("#Arm", {x: -1000}, {x: 0}), index)
                    addAnimation(gsap.fromTo(arm.position, {x: -1000, y: 380}, {x: 20, y: 350}), ">");
                    addAnimation(gsap.set(arm.scale, {x: 2.2, y: 2.2, z: 2.2}), "<");
                    addAnimation(gsap.to(arm.position, {
                        x: -700, y: 50, duration: .2, scrollTrigger: {
                            trigger: "#page2",
                            start: "top 90%",
                            end: "center 80%",
                            scrub: true,
                        }
                        }));
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
                    setArm(spline.findObjectByName('arm'));
                    setForearm(spline.findObjectByName('Forearm'));
                    context.setSpline(spline);
                }}
             scene="https://prod.spline.design/dByJznS-hnkY8WiL/scene.splinecode" />

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
    context.arm;
    context.setArm = (arm) => {
        context.arm = arm;
    };
    context.forearm;
    context.setForearm = (arm) => {
        context.forearm = arm;
    };
    context.spline;
    context.setSpline = (arm) => {
        context.spline = arm;
    };
    let wheel = 0;
    return (
        <div id={"body"} onWheel={
            (e) => {
                const Fpos = context.forearm.position;
                const pos = {
                    x : -72.99,
                    y: -177.09,
                    z:  0,
                };
                if(pos.x === Fpos.x && pos.y === Fpos.y && pos.z === Fpos.z)
                {
                    console.log('reset');
                    context.forearm.emitEvent("keyDown");
                }
            }}>
            <timelineContext.Provider value={context}>
                <Arm index={0} wheel={wheel}/>
                <Page1/>
                <Page2/>
                <Page3/>
                <div className={"blank"}></div>
                <div className={"blank"}></div>
                <div className={"blank"}></div>
                <Page4/>
            </timelineContext.Provider>
        </div>
    );
}

export {timelineContext};
