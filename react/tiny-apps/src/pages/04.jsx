import { useState } from "react";

export default function Page04() {
    const [searchTerm, setSearchTerm] = useState("");
    const [regularOnly, setRegularOnly] = useState(false);


    return (
        <>
            <section>
                <h2>Filterable Employees Table</h2>
                <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} setRegularOnly={setRegularOnly} regularOnly={regularOnly} />
                <EmployeeTable searchTerm={searchTerm} regularOnly={regularOnly} />
            </section>


        </>
    )
}




function SearchForm({ searchTerm, setSearchTerm, setRegularOnly, regularOnly }) {

    return (
        <form>
            <input type="text" name="seachTerm" id="searchTerm" placeholder="Çalışan isminde arayın..." value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />

            <label for="">
                <input type="checkbox" onChange={(e) => { setRegularOnly(!regularOnly) }} checked={regularOnly} />
                Sadece kadroluları göster
            </label>
        </form>
    )
}



const DATA_EMPLOYEES = [


    { id: 18, name: "Deniz Testing", department: "Arkayüz", education: "lorem", wage: "", isRegular: true },
    { id: 19, name: "Mert Test", department: "Ux araştıması", education: "lorem", wage: "", isRegular: false },
    { id: 21, name: "Burak Test", department: "Önyüz", education: "lorem", wage: "", isRegular: false },
    { id: 22, name: "Burcu Test", department: "Önyüz", education: "lorem", wage: "", isRegular: false },
    { id: 34, name: "Yasemin Test", department: "Önyüz", education: "lorem", wage: "", isRegular: false },
    { id: 14, name: "Ali Test", department: "Önyüz", education: "lorem", wage: "", isRegular: false },

]

function EmployeeTable({ searchTerm, regularOnly }) {

    const rows = [];
    let lastDepartment = null;

    DATA_EMPLOYEES.forEach((employee) => {

        if (employee.name.toLocaleLowerCase("tr").indexOf(searchTerm.toLocaleLowerCase("tr")) === -1) {
            return;
        }

        if (regularOnly && !employee.isRegular) return;

        if (lastDepartment !== employee.department) {
            rows.push(<EmployeeDepartmentRow department={employee.department} />);
        }

        lastDepartment = employee.department;

        rows.push(<EmployeeRow {...employee} />);

    })


    return (
        <table>
            <tbody>
                <tr>
                    <th>İsim</th>
                    <th>Bölüm</th>
                    <th>Kadro</th>
                    <th>Eğitim</th>
                    <th>Maaş</th>
                </tr>

                {rows}


            </tbody>
        </table>
    )
}



function EmployeeRow({ name, department, isRegular, education, wage }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{department}</td>
            <td>{isRegular ? "var" : "yok"} </td>
            <td>{education}</td>
            <td>{wage}</td>
        </tr>
    )
}


function EmployeeDepartmentRow({ department }) {
    return (
        <tr >
            <td colspan="5"><strong>{department}</strong></td>
        </tr>
    )
}