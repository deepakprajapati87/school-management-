import { AdminBox } from "../boxAdmin/boxAdmin"
import { Breadcrumbs } from "../breadcrumbs/Breadcrumb"
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import MoneyIcon from '@mui/icons-material/Money';
import StudentsChart from "../studentsDashboard/Students";
import { NoticeBoard } from "../notice-board/noticeBoard";
import { StudentTable } from "../studentsTable/studentsTable";
export const Teacher = () => {
    return (
        <>
            <div className="teacher">
                <Breadcrumbs headingthree='Admin Dashboard' breadcrumbOne='Home' breadcrumbSecond='Teacher' />
              <div className="row">
                <div className="col-md-6">
                    <div className="box-admin card p-3">
                    <AdminBox icon={<EscalatorWarningIcon/>} title={'Notification'} number={35000} iconBgColor="#f3e5f5" iconColor="#8e24aa" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box-admin card p-3">
                    <AdminBox icon={<AssignmentIcon/>} title={'Total Exams'} number={19050} iconBgColor="#e1f1ff" iconColor="#3f7afc" />
                    </div>
                </div> 
                <div className="col-md-6">
                    <div className="box-admin card p-3">
                    <AdminBox icon={<SchoolIcon/>} title={'Graduate Studes'} number={23890} iconBgColor="#fff2d8" iconColor="#ffa001" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box-admin card p-3">
                    <AdminBox icon={<MoneyIcon/>} title={'Total Income'} number={2102050} iconBgColor="#ffeaea" iconColor="#ff0000" />
                    </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                    <div className="">
                        <StudentsChart/>
                    </div>
                </div>
                <div className="col-md-6">
                    <NoticeBoard/>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                    <StudentTable/>
                </div>
              </div>
            </div>

        </>
    )
}