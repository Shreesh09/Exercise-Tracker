import feat1 from '../../assets/icons/feat1.png'
import feat2 from '../../assets/icons/feat2.png'
import feat3 from '../../assets/icons/feat3.png'
export default function Page2(){
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