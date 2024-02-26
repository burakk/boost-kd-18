import { DATA_PEOPLE_01, DATA_FAMOUS_PEOPLE } from "../data";



//[ <li>Deniz</li>, <li>Yasemin</li> ... ]

/*
const jsxList = [];

DATA_PEOPLE_01.forEach((p) => {


    jsxList.push(<li>{p}</li>)


});

console.log(jsxList, DATA_PEOPLE_01);



const aBetterWayJsxList = DATA_PEOPLE_01.map( (p)=><li>{p}</li> );
*/





const Page01 = () => {
    return (
        <section>
            <h1>Liste Render Etmek</h1>
            <Testing01 />
            <OrdinaryPeople />
            <Chemists list={DATA_FAMOUS_PEOPLE} />
            <ChemistsV2 list={DATA_FAMOUS_PEOPLE} />
            <People list={DATA_FAMOUS_PEOPLE} filterByProfession="chemist" />
            <People list={DATA_FAMOUS_PEOPLE} filterByProfession="adventurer" />

            <UniqueKeyedComp />
        </section>
    )
}


function Testing01() {
    const myList1 = [1, 2, 3, 4];
    const myNum = 3;
    const myJsxEl = <div></div>;
    const myJsxElList = [<p>hello</p>, <h1>Hi</h1>];

    return (
        <div>
            {myList1}
            {myJsxElList}
        </div>
    )

}

//<OrdinaryPeople/>
function OrdinaryPeople() {

    const jsxList = DATA_PEOPLE_01.map((p) => <li>{p}</li>);

    return (
        <ul>
            {jsxList}
        </ul>
    )
}


function OrdinaryPeopleV2() {

    return (
        <ul>
            {DATA_PEOPLE_01.map((p) => <li>{p}</li>)}
        </ul>
    )

}


function Chemists({ list }) {

    const jsxList = [];

    list.forEach(person => {

        if (person.profession === "chemist") {

            jsxList.push(<li>{person.name}:{person.profession}</li>);
        }


    });

    console.log(jsxList);

    return (
        <div>
            <h1>Kimyagerler</h1>
            <ul>
                {jsxList}
            </ul>
        </div>

    );
}


function ChemistsV2({ list }) {

    const filteredList = list.filter((p) => p.profession === "chemist");

    const mappedJsxList = filteredList.map((p, index) => <li key={index}>{p.name}:{p.profession}</li>)

    return (
        <div>
            <h2>Kimyagerler V2</h2>
            {mappedJsxList}
        </div>
    )

}

function ChemistsV3({ list }) {

    const jsxList = list.filter((p) => p.profession === "chemist").map((p) => <li>{p.name}:{p.profession}</li>);

    return (
        <div>
            <h2>Kimyagerler V3</h2>
            {jsxList}
        </div>
    )

}


function ChemistsV4({ list }) {


    return (
        <div>
            <h2>Kimyagerler V3</h2>
            {list.filter((p) => p.profession === "chemist").map((p) => <li>{p.name}:{p.profession}</li>)}
        </div>
    )

}




function People({ list, filterByProfession }) {

    const filteredList = list.filter((p) => p.profession === filterByProfession);

    const mappedJsxList = filteredList.map((p) => <li key={p.id}>{p.name}:{p.profession}</li>)




    return (
        <div>
            <h1>Daha iyi bir kişi listesi</h1>
            <h2>{filterByProfession}</h2>
            {mappedJsxList}
        </div>
    )

}



function UniqueKeyedComp() {
    const ingredients = ["pirinç", "şeker", "su", "yağ"];

    const steps = [
        { id: 1, content: "Birinci adımı at" },
        { id: 2, content: "İkinci adımı at ve koşmaya başla" },
        { id: 3, content: "Zıplayarak düş" },
        { id: 4, content: "Gökyüzüne bak" },
    ]



    const products = [
        { content: "Hp laptop" },
        { content: "Lenovo Desktop" },
        { content: "Porsche Red Car" },
    ]

    // dizinin içindeki çocuk jsx'ler için key olarak döngünğn index'lerini kullanmak tavsiye edilmez
    const ingredientsJsxList = ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);


    const stepsJsxList = steps.map((step) => <li key={step.id}>{step.content}</li>)

    const productsWithUUIDS = products.map((p) => {

        /*
        const newP = { id: crypto.randomUUID(), content: p.content };
        */
        const newP = { ...p, id: crypto.randomUUID() };
        // { content: "Hp laptop" } 
        return newP;

    });

    const productsJsxList = productsWithUUIDS.map(
        (product) => <li key={product.id}>{product.content}</li>
    )

    console.log(productsWithUUIDS);

    return (

        <div>
            <section>
                <h1>İçindekiler:</h1>
                <ul>
                    {ingredients}
                </ul>
            </section>

            <section>
                <h1>Adımlar:</h1>
                <ul>
                    {stepsJsxList}
                </ul>
            </section>
            <section>
                <h1>Ürünler</h1>
                <ul>  {productsJsxList} </ul>
            </section>

        </div>
    )
}








// [ <li>chemist: Deneme 2</li>, <li>chemist: Deneme 3</li> ]










export default Page01;





