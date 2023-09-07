import {useLayoutEffect} from "react";
import gsap from "gsap";

export function Page3() {

    useLayoutEffect(() => {
        const ctx = gsap.context(
            gsap.to('#page2', {scrollTrigger: {
                    trigger: "#page2",
                    start: "top 0%",

                    onLeaveBack: () => {
                        gsap.to('#page3', {'top': 900});
                    },
                    onEnter: () =>  {
                        gsap.to('#page3', {'top': 0});
                    },
                }})
        );

        return () => ctx.revert();
    }, []);

    return(
      <div id={"page3"}>
          <h1>HOW TO USE?</h1>
          <div id={"page3-content"}>
              <h2 id={"step1"}><span className={"index"}> 1.</span> <span className={"highlight"}>Create</span> an Account</h2>
              <h2 id={"step2"}><span className={"index"}> 2.</span> Click <span className={"highlight"}>New</span> Button to add a workout</h2>
              <h2 id={"step3"}><span className={"index"}> 3.</span> Click <span className={"highlight"}>View</span> Button to view history</h2>
          </div>
      </div>
    );
}