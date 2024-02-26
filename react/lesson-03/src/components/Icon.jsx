const Icon = ({ name = "fa-solid fa-bolt", color = "white", size = "24px" }) => {
    return (
        <i className={name} style={{ color, fontSize: size }}></i>
    )
}


export { Icon };