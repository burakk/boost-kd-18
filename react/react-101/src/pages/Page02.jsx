import { MyBasicButton, MyFancyBtn, MyFancyButton2, MyFancyButton3, MyRandomBtn } from "../components/Buttons";
import Avatar from "../components/Avatar";

export default function Page02() {
    return (
        <section>
            <h1>Jsx içerisinde süslü parantez ile js expression'ları yazmak</h1>
            { /*   Bu bir jsx yorum satırıdır   */}
            {3 + 4}
            <MyBasicButton />
            <MyRandomBtn />
            <MyFancyBtn />
            <MyFancyButton2 />
            <MyFancyButton3 />
            <Avatar />
        </section>
    )
}