import { Breadcrumbs } from "../breadcrumbs/Breadcrumb"
import { StudentTable } from "../studentsTable/studentsTable"

export const AllStudents = () => {
    return (
        <>
            <div className="AllStudents">
                <div className="row">
                    <Breadcrumbs headingthree='Students' breadcrumbOne='Home' breadcrumbSecond='All Studnets' />

                    <div className="col-md-12 mt-4">
                        <StudentTable />
                    </div>
                </div>
            </div>
        </>
    )
}