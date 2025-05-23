import { Breadcrumbs } from "../breadcrumbs/Breadcrumb"

import { StudentTable } from "../studentsTable/studentsTable"

export const AllParents =()=>{
    return(
        <>
        <div className="Allteachers">
            <Breadcrumbs headingthree='Parents' breadcrumbOne='Home' breadcrumbSecond='All Parents'/>
            <div className="row">
                <div className="col-md-12">
                    
                    <StudentTable/>
                </div>
            </div>
        </div>
        </>
    )
}