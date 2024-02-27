import { useState } from "react";

export default function Page03() {
    return (
        <section>
            <h2>Komponentin hafızasında object saklamak ve güncellemek</h2>
            <Stage initialPosition={{ x: 14, y: 28 }} />

            <FormV1 />

            <FormV2 />

            <FormV3 />

            <FormV4 />
        </section>
    )
}

function Stage(props) {

    const [pos, setPos] = useState(props.initialPosition);
    /*
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    */
    const stageStyles = {
        border: "2px solid red",
        width: "300px",
        height: "300px",
        position: "relative",
    }

    function handlePointerMove(e) {
        console.log(e.clientX, e.clientX);

        /* ***!!! MUTATION STARTS    Do not mutate the state variable or prop value !!!***  */
        pos.x = e.clientX; //mutation
        pos.y = e.clientY;//mutation
        /* ***!!! MUTATION ENDS   Do not mutate the state variable or prop value !!!***  */
        setPos(pos);  /* ***!!! REACT WILL NOT USE UPDATED VALUES !!!***  */


        /* ***!!! NO MUTATION EVERYTHING IS FINE !!!***  */

        const newPos = {};
        newPos.x = e.clientX;
        newPos.y = e.clientY;


        setPos(newPos);


        //setPos({ x: e.clientX, y: e.clientY });
        //rerender triggers
    }

    return (
        <div style={stageStyles} onPointerMove={handlePointerMove}>
            <div style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                top: `${pos.y - 360}px`,
                left: `${pos.x - 40}px`
            }}>
            </div>


        </div>
    )
}



function FormV1() {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    function handleFirstNameChange(e) {
        setUserFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setUserLastName(e.target.value);
    }

    function handleEmailChange(e) {
        setUserEmail(e.target.value);
    }

    return (
        <>
            <h3>Kullanıcı formu v1</h3>
            <form>
                <input type="text" name="userFirstName" id="userFirstName" placeholder="Adınız" value={userFirstName} onChange={handleFirstNameChange} />
                <input type="text" name="userLastName" id="userLastName" placeholder="Soyadınız" onChange={handleLastNameChange} value={userLastName} />
                <input type="email" name="userEmail" id="userEmail" placeholder="Epostanız" onChange={handleEmailChange} value={userEmail} />

                <ul>
                    <li>Kullanıcı adı: {userFirstName}</li>
                    <li>Kullanıcı soyadı: {userLastName}</li>
                    <li>Kullanıcı eposta: {userEmail}</li>
                </ul>
            </form>
        </>
    )
}



function FormV2() {
    const [userInfo, setUserInfo] = useState({ userFirstName: "", userLastName: "", userEmail: "" })


    function handleFirstNameChange(e) {
        const newUserInfo = {
            userFirstName: e.target.value,
            userLastName: userInfo.userLastName,
            userEmail: userInfo.userEmail

        };
        setUserInfo(newUserInfo);
    }

    function handleLastNameChange(e) {
        const newUserInfo = {
            userFirstName: userInfo.userFirstName,
            userLastName: e.target.value,
            userEmail: userInfo.userEmail

        };
        setUserInfo(newUserInfo);
    }

    function handleEmailChange(e) {
        const newUserInfo = {
            userFirstName: userInfo.userFirstName,
            userLastName: userInfo.userLastName,
            userEmail: e.target.value

        };
        setUserInfo(newUserInfo);

    }

    //{ userFirstName: "", userLastName: "", userEmail: "" }
    //{ userFirstName: "B", userLastName: "", userEmail: "" }
    return (
        <>
            <h3>Kullanıcı formu v2</h3>
            <form>
                <input type="text" name="userFirstName" id="userFirstName" placeholder="Adınız" value={userInfo.userFirstName} onChange={handleFirstNameChange} />
                <input type="text" name="userLastName" id="userLastName" placeholder="Soyadınız" onChange={handleLastNameChange} value={userInfo.userLastName} />
                <input type="email" name="userEmail" id="userEmail" placeholder="Epostanız" onChange={handleEmailChange} value={userInfo.userEmail} />

                <ul>
                    <li>Kullanıcı adı: {userInfo.userFirstName}</li>
                    <li>Kullanıcı soyadı: {userInfo.userLastName}</li>
                    <li>Kullanıcı eposta: {userInfo.userEmail}</li>
                </ul>
            </form>
        </>
    )
}




function FormV3() {
    const [userInfo, setUserInfo] = useState({ userFirstName: "", userLastName: "", userEmail: "" })

    function handleFirstNameChange(e) {
        //Spred operator ???
        const newUserInfo = {
            ...userInfo,
            userFirstName: e.target.value,
        };
        setUserInfo(newUserInfo);
    }

    function handleLastNameChange(e) {
        const newUserInfo = {
            ...userInfo,
            userLastName: e.target.value,

        };
        setUserInfo(newUserInfo);
    }

    function handleEmailChange(e) {
        const newUserInfo = {
            ...userInfo,
            userEmail: e.target.value

        };
        setUserInfo(newUserInfo);

    }

    return (
        <>
            <h3>Kullanıcı formu v3</h3>
            <form>
                <input type="text" name="userFirstName" id="userFirstName" placeholder="Adınız" value={userInfo.userFirstName} onChange={handleFirstNameChange} />
                <input type="text" name="userLastName" id="userLastName" placeholder="Soyadınız" onChange={handleLastNameChange} value={userInfo.userLastName} />
                <input type="email" name="userEmail" id="userEmail" placeholder="Epostanız" onChange={handleEmailChange} value={userInfo.userEmail} />

                <ul>
                    <li>Kullanıcı adı: {userInfo.userFirstName}</li>
                    <li>Kullanıcı soyadı: {userInfo.userLastName}</li>
                    <li>Kullanıcı eposta: {userInfo.userEmail}</li>
                </ul>
            </form>
        </>
    )
}



function FormV4() {
    const [userInfo, setUserInfo] = useState({ userFirstName: "", userLastName: "", userEmail: "" })


    function handleChange(e) {
        console.log(e.target.name);

        const inpName = e.target.name;
        const inpVal = e.target.value;
        const newUserInfo = { ...userInfo, [inpName]: inpVal };

        setUserInfo(newUserInfo);
    }


    return (
        <>
            <h3>Kullanıcı formu v4</h3>
            <form>
                <input type="text" name="userFirstName" id="userFirstName" placeholder="Adınız" value={userInfo.userFirstName} onChange={handleChange} />
                <input type="text" name="userLastName" id="userLastName" placeholder="Soyadınız" onChange={handleChange} value={userInfo.userLastName} />
                <input type="email" name="userEmail" id="userEmail" placeholder="Epostanız" onChange={handleChange} value={userInfo.userEmail} />

                <ul>
                    <li>Kullanıcı adı: {userInfo.userFirstName}</li>
                    <li>Kullanıcı soyadı: {userInfo.userLastName}</li>
                    <li>Kullanıcı eposta: {userInfo.userEmail}</li>
                </ul>
            </form>
        </>
    )
}