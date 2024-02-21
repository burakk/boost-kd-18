import { BasicCard } from "../components/Cards";
import { Avatar2 } from "../components/Avatar";
import { Modal } from "../components/Modal";

export default function Page03() {

    return (
        <section>
            <h1>Bir komponente özellik geçirebilmek - Passing props to a component</h1>

            <ul>
                {/*  { cardContent:"Açıklama 1", cardTitle:"Ürün 1"}  */}
                <BasicCard cardContent="Açıklama1" cardTitle="Ürün 1" />
                {/* BasicCard(   { cardContent:"Açıklama 1", cardTitle:"Ürün 1" } ) */}
                <BasicCard cardContent="Açıklama2" cardTitle="Ürün 2" />
                <BasicCard cardContent="Açıklama3" cardTitle="Ürün 3" />
                <BasicCard cardContent="Açıklama4" cardTitle="Ürün 4" />
                <BasicCard cardContent="Açıklama5" cardTitle="Ürün 5" />

                {BasicCard({ cardTitle: "Hello me", cardContent: "asd" })} {/*  Do not !!! */}
            </ul>

            <Avatar2 />
            <Avatar2 url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/440px-Marie_Curie_c._1920s.jpg" name="Marie Curie" />

            <Avatar2 url="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/440px-Tesla_circa_1890.jpeg" name="Nikola Tesla" />



            {/* <Modal title="Üye olun" hasBorders={false}>
              <FrmRegister/>
            </Modal> */}
            
        </section>
    )


}



function FrmLogin(){
    return <h1>Login</h1>
}

function FrmRegister() {
    return <h1>Register</h1>
}