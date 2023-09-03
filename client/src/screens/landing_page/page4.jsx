export default function Page4() {
    return (
        <div id={"page4"}>
            <div id={"signup-box"}>
                <h1>CREATE YOUR ACCOUNT</h1>
                <form>
                    <p>Username</p>
                    <input/>
                    <button id={"signup-button"} type={"submit"}>Sign Up</button>
                </form>
                <p>Already have an account? <a className={"highlight"}>Login here</a></p>
            </div>
        </div>
    )
}