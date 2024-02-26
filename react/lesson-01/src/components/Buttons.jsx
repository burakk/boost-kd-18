export function MyBasicButton() {

    const myBtnType = "Minimal";
    const myClassName = "btn-minimal";

    return <button className={myClassName}>Hello me! {myBtnType}</button>;

}

export const MyRandomBtn = () => {

    return <button>Merhabalar rastlantısallık, {Math.random()}</button>
}


export const MyFancyBtn = function () {


    function createMyName() {

        const namePool = ["apple", "orange", "kiwi"];

        return namePool[Math.floor(Math.random() * namePool.length)]


    }

    return <button className={createMyName()}>Ben {createMyName()}</button>
}



export const MyFancyButton2 = () => {

    const myStyles = {
        border: "2px solid red",
        backgroundColor: "black",
        color: "white",
    }

    return <button style={myStyles}>Hello fancy!</button>

}


export const MyFancyButton3 = () => {



    return <button style={{
        border: "2px solid yellow",
        backgroundColor: "gray",
        color: "white",
    }}>Hello fancy!</button>

}
