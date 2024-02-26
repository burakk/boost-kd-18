const ButtonV1 = () => {

    function handleClick(e) {
        console.log(e.target);
        console.log("Merahaba Sayın Düğme");

    }

    return (
        <button onClick={handleClick}>Merhaba Düğme</button>
    )
}


const ButtonV2 = () => {
    return (
        <button onClick={
            () => {
                console.log("Ben v2 düğme")
            }


        }>
            Merhaba v2 düğme
        </button>
    )
}


const AlertButton = (props) => {


    function handleClick(e) {
        alert(props.message);
    }

    return (
        <button onClick={handleClick}> {props.children}</button>
    )

}


const BaseButton = ({ onClick, children }) => {

    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

const PlayButton = ({ movieName }) => {

    function handlePlay() {
        alert(movieName + " yürütülüyor...");
    }

    return (
        <BaseButton onClick={handlePlay} >
            Filmi Oynat
        </BaseButton>
    )
}




const UploadButton = ({ fileName }) => {

    function handleUpload() {
        alert(fileName + " yükleniyor...");
    }

    return (
        <BaseButton onClick={handleUpload}>
            Dosya Yükle
        </BaseButton>
    )
}








export { ButtonV1, ButtonV2, AlertButton, PlayButton, UploadButton };







