const fruits = ["apple", "lemon", "kiwi"];

const jsxList = [ <p>apple</p>, <p>lemon</p>, <p>kiwi</p>];

const myObj = { id:0, name:"test" };



const Page01 = () => {
    return (
        <section>
            <h1>Liste Render Etmek</h1>
            { fruits }

            {jsxList}
        </section>
    )
}





export default Page01;