export default function Page04() {
    return (
        <section>
            <h1>Koşullu render etmek - conditional rendering</h1>

            <PackingList1 />

            <PackingList2 />


            <PackingList3 />

            <PackingList4 />
        </section>
    )
}


function PackingList1() {

    return (
        <div>
            <h2>Yanımıza alacaklarımız 1</h2>
            <ul>
                <PackingList1Item content="Güneş gözlüğü" isPacked={false} />
                <PackingList1Item content="Şapka" isPacked={true} />
            </ul>
        </div>
    )
}


function PackingList1Item({ content, isPacked }) {
    if (isPacked) {
        return <li>{content} - alındı </li>
    }
    return <li>{content}</li>;
}



function PackingList2() {

    return (
        <div>
            <h2>Yanımıza alacaklarımız 2</h2>
            <ul>
                <PackingList2Item content="şapka" isPacked={false} />
                <PackingList2Item content="defter" isPacked={true} />
                <PackingList2Item content="kalem" isPacked={false} />
            </ul>
        </div>
    )
}

function PackingList2Item({ content, isPacked }) {
    if (isPacked) {
        return null;
    }
    return <li>{content}</li>
}


function PackingList3() {

    return (
        <div>
            <h2>Yanımıza alacaklarımız 3</h2>
            <ul>
                <PackingList3Item content="şapka" isPacked={false} />
                <PackingList3Item content="defter" isPacked={true} />
                <PackingList3Item content="kalem" isPacked={false} />
            </ul>
        </div>
    )
}


function PackingList3Item({ content, isPacked }) {

    /*
    const resultJsx = isPacked ? null : <li>{content}</li>;
    */

    const resultJsx = <li> {content} {isPacked ? "- alındı " : ""}  </li>;

    return resultJsx;
}

// logical and operator 

function PackingList4() {

    return (
        <div>
            <h2>Yanımıza alacaklarımız 4</h2>
            <ul>
                <PackingList4Item content="şapka" isPacked={false} />
                <PackingList4Item content="defter" isPacked={true} />
                <PackingList4Item content="kalem" isPacked={false} />
            </ul>
        </div>
    )
}


function PackingList4Item({ content, isPacked }) {



    return <li> {content} {isPacked && "- alındı"}  </li>;
}






function PackingList5() {

    return (
        <div>
            <h2>Yanımıza alacaklarımız 5</h2>
            <ul>
                <PackingList4Item content="şapka" isPacked={false} />
                <PackingList4Item content="defter" isPacked={true} />
                <PackingList4Item content="kalem" isPacked={false} />
            </ul>
        </div>
    )
}


function PackingList5Item({ content, isPacked }) {

    let jsxContent = content;

    if( isPacked){
        jsxContent = content + " " + " - alındı ";
    }


    return <li> {jsxContent} </li>;
}

