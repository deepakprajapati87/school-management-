import { Breadcrumbs } from "../breadcrumbs/Breadcrumb"

import { StudentTable } from "../studentsTable/studentsTable"

export const Allteachers =()=>{
    return(
        <>
        <div className="Allteachers">
            <Breadcrumbs headingthree='Teacher' breadcrumbOne='Home' breadcrumbSecond=' All Teachers'/>
            <div className="row">
                <div className="col-md-12">
                    
                    <StudentTable/>
                </div>
            </div>
        </div>
        </>
    )
}