import { Link } from "./Link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/01"> Jsx Kuralları</Link>
                </li>
                <li>
                    <Link to="/02">  Jsx içerisinde süslü parantez ile js expression'ları yazmak</Link>
                </li>
                <li>
                    <Link to="/03">
                        Bir komponente özellik geçirebilmek-passing props to a component</Link>
                </li>
                <li>
                    <Link to="/04">
                        Koşullu render etmek - conditional rendering
                    </Link>

                </li>
            </ul>
        </nav>
    );
}


//bir link komponenti yazınız bu komponente komponentin jsx elemanından href değeri gönderebilmeliyim, children  kullanarak çocuk öğe yollayabilmeliyim