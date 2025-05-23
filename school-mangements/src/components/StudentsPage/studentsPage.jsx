import { HeadingThree } from "../headingThree/headingThree"
import Profile from '../../assets/img/student.png'


const studentData = [
    { label: "Name", value: "Jessia Rose" },
    { label: "Gender", value: "Female" },
    { label: "Father Name", value: "Fahim Rahman" },
    { label: "Mother Name", value: "Jannatul Kazi" },
    { label: "Date Of Birth", value: "07.08.2006" },
    { label: "Religion", value: "Islam" },
    { label: "Father Occupation", value: "Graphic Designer" },
    { label: "E-Mail", value: "jessiarose@gmail.com" },
    { label: "Admission Date", value: "05.01.2019" },
    { label: "Class", value: "2" },
    { label: "Section", value: "Pink" },
    { label: "Roll", value: "10005" },
    { label: "Adress", value: "House #10, Road #6, Australia" },
    { label: "Phone", value: "+ 88 9856418" },
];

export const StudentsInfromation = () => {
    return (
        <>
            <div className="card p-3">
                <HeadingThree title='About Us' />
                <div className="d-flex mt-3">
                    <div className="flex-shrink-0 item-img">
                        <img src={Profile} alt="..." />
                    </div>
                    <div class="flex-grow-1 ms-3 ">
                        <HeadingThree className="mb-2" title='Jessia Rose' />
                        <p>Aliquam erat volutpat. Curabiene natis massa sedde lacustiquen sodale word moun taiery.</p>
                    </div>
                </div>
                <div className="table-responsive info-table mt-3">
                    <table className="table">
                        <tbody>
                            {studentData.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ width: "30%" }}>{item.label}</td>
                                    <td className="text-dark-medium">{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}