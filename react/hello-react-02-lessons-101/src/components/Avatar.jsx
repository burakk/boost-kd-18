export default function Avatar() {
    const avatarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1280px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg";


    const avatarStyles = {

        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    const avatarName = "Einstein";


    return (
        <figure>
            <img style={avatarStyles} src={avatarUrl} alt={avatarName} />
            <figcaption>{avatarName}</figcaption>
        </figure>
    )
}



// Avatar2 ->  property olarak resim url'si alacak, resim url'si göndermezsem einstein görünecek
export function Avatar2(props) {

    let avatarName = props.name;
    let avatarUrl = props.url;

    if (!avatarUrl) {
        avatarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg";
        avatarName = "Einstein";
    }


    const avatarStyles = {

        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    return (
        <figure>
            <img style={avatarStyles} src={avatarUrl} alt={props.name} />
            <figcaption>{avatarName} </figcaption>
        </figure>
    )
}



export function Avatar3(props) {

   const { url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg", name="Einstein" } = props;


    const avatarStyles = {

        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    return (
        <figure>
            <img style={avatarStyles} src={url} alt={name} />
            <figcaption>{name} </figcaption>
        </figure>
    )
}



export function Avatar4( {url="default url", name}  ) {

     return (
         <figure>
             <img  src={url} alt={name} />
             <figcaption>{name} </figcaption>
         </figure>
     )
 }