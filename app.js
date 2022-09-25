const title = React.createElement(
    'h1',
    {
        id : "main-title",
        title : "this is a title"
    },
    'My First React Element'
)

const desc = React.createElement(
    'p',
    {
        id : "description",
    },
    "My description"

)

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

ReactDOM.render(
    header,
    document.getElementById("root")
)