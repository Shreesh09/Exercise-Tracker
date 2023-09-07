import feat1 from '../../assets/icons/feat1.png'
import feat2 from '../../assets/icons/feat2.png'
import feat3 from '../../assets/icons/feat3.png'
import {timelineContext} from "./landing_page.jsx";
import {useContext, useEffect, useLayoutEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Page2(){
    const context = useContext(timelineContext);

    useLayoutEffect(() => {
        const ctx = gsap.context(
          gsap.to('#page2', {'top': 0, scrollTrigger: {
                trigger: "#page2",
                start: "top 90%",
                end: "center 50%",
                onLeaveBack: () => {
                    gsap.to('#page2', {'top': 900});
                },
                onEnter: () =>  {
                    gsap.to('#page2', {'top': 0});
                },
        }})
    );

        return () => ctx.revert();
    }, []);

    return(
        <div id={"page2"}>
            <h1 id={"text2"}>WHY USE CHAD?</h1>
            <div id={"feature-container"}>
                <div id={"feat1"}>
                    <img className={"icon"} alt={"icon"} src={feat1}/>
                    <h3>Easy-to-use</h3>
                    <p>The app has a simple User Interface</p>
                </div>
                <div id={"feat2"}>
                    <img className={"icon"} alt={"icon"} src={feat2}/>
                    <h3>Browser Based</h3>
                    <p>Access your account directly from the website</p>
                </div>
                <div id={"feat3"}>
                    <img className={"icon"} alt={"icon"} src={feat3}/>
                    <h3>Multi-Platform</h3>
                    <p>Available Windows, Android, iOS, and many more</p>
                </div>
            </div>
        </div>
    )
}