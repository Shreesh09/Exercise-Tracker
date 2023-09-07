import './styles/login_page.css'
export default function Login(){
    return (
        <div id={"login-page"}>
            <form>
                <p>Username</p>
                <input/>
                <button id={"login-button"} type={"submit"}>Login</button>
            </form>
            <p>Do not have an account? <a className={"highlight"}>Signup here</a></p>
        </div>
    );
}