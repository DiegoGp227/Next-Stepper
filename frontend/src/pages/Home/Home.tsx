import Style from "./style.module.css";

function Home() {
    return (
        <main className={Style.main}>
            <h1 className={Style.title}>Hello!</h1> 
            <p className={Style.text}>Create new project or continue one old project</p>
        </main>
    )
}

export default Home;