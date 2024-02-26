import { ButtonV1, ButtonV2, AlertButton, PlayButton, UploadButton } from '../components/Button';

const Page01 = () => {
    return (
        <section>
            <h1>Etkileşim</h1>
            <p>Jsx elemanlarının onClick-onMouseMove-onMouseOut-onSubmit vb property'leri kullaılarak handler function'lar kullanılabilir.</p>


            <ButtonV1 />

            <ButtonV2 />



            <AlertButton message="Merhaba Dünya">
                Merhabalar sayın alarm düğmesi
            </AlertButton>

            <PlayButton movieName="The shining" />

            <UploadButton fileName="./img01.jpg" />

            <Toolbar />

            <EventPropagationTestComp />


            <FrmContact />
        </section>
    )
}


const Toolbar = () => {

    const tootlbarStyle = {
        border: "2px solid red",
    }
    return (
        <div style={tootlbarStyle}>
            Toolbar
            <BaseToolbarButton onSmash={(e) => { alert(e.target) }}>Filmi oynat</BaseToolbarButton>
            <BaseToolbarButton onSmash={(e) => { alert(e.target) }}>Filmi düzenle</BaseToolbarButton>
        </div>
    )
}


/* passing handler function to a component */
const BaseToolbarButton = ({ onSmash, children }) => {

    return <button onClick={onSmash}>{children}</button>
};

export default Page01;





const EventPropagationTestComp = () => {

    /* buton tıklandığında nav üzerindeki click event'i de tetiklenir */
    return (
        <nav style={{ border: "2px solid red" }} onClick={(e) => { alert("Ben nav elemanı") }}>
            <h2>Event propagation test komponenti</h2>
            <button type="button" onClick={(e) => { e.stopPropagation(); alert("Ben buton"); }}>Buton 1</button>
            <button type="button" onClick={(e) => { e.stopPropagation(); alert("Ben buton") }} >Buton 2</button>
            <button type="button" onClick={(e) => { e.stopPropagation(); alert("Ben buton") }}>Buton 3</button>
            <button type="button" onClick={(e) => { e.stopPropagation(); alert("Ben buton") }}>Buton 4</button>
        </nav>
    )
}



const FrmContact = () => {
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData.get("email")); //handle function'lar side effect yazabileceğimiz uygun yerler 
    }
    return (
        <form style={{ border: "4px solid blue" }} onSubmit={handleSubmit}>
            <h2>İletişim formu</h2>
            <input type="email" name="email" id="email" placeholder='Epostanız' />
            <textarea placeholder='mesajınız'></textarea>
            <button type="submit">Gönder</button>
        </form>
    )
}


function double(num){
   
    const res = 2 * num;

    document.getElementById("root").textContent = res;

    return res;
}