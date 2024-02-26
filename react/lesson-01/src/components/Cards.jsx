export const BasicCard = (props) => {

    console.log(props);

    const cardStyle = {
        border: "2px solid black", padding: "24px",
        borderRadius: "8px"
    };

    return (
        <li style={cardStyle} >
            <header>
                <h1>{props.cardTitle}</h1>
            </header>
            <div className="content">

               { props.cardContent }
            </div>
            <footer>
                <button>Aksiyon</button>
            </footer>
        </li>
    )
};



export const BasicCard2 = (props) => {

    /* object destructuring */
    const { cardContent, cardTitle } = props;

    const cardStyle = {
        border: "2px solid black", padding: "24px",
        borderRadius: "8px"
    };

    return (
        <li style={cardStyle} >
            <header>
                <h1>{cardTitle}</h1>
            </header>
            <div className="content">

               { cardContent }
            </div>
            <footer>
                <button>Aksiyon</button>
            </footer>
        </li>
    )
};


