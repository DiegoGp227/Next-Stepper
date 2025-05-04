import Style from "./style.module.css";


function NotFound() {
    return (
        <main className={Style.main}>
            <p>Ops</p>
            <h2>404</h2>
            <h1>Page not found</h1>
        </main>
    )
}

export default NotFound;