const title = "Title Hello World"
const desc = "Desc Hello World "

const myTitleId = 'main-title';

const header = (
    <header>
        <h1 id={myTitleId}>{title}</h1>,
        <p>{desc}</p>
    </header>

)

ReactDOM.render(
    header,
    document.getElementById("root")
)