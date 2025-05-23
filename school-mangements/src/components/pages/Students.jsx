import { AdminBox } from "../boxAdmin/boxAdmin"
import { Breadcrumbs } from "../breadcrumbs/Breadcrumb"
import { CopyRights } from "../copyWrites/copyWrites";
import EventCalendar from "../event-calender/EventCalender";
import { NoticeBoard } from "../notice-board/noticeBoard";
import StudentsChart from "../studentsDashboard/Students";
import { StudentsInfromation } from "../StudentsPage/studentsPage"
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import { MdOutlinePercent } from "react-icons/md";
import { StudentTable } from "../studentsTable/studentsTable";


export const Students = () => {
    return (
        <>
            <div className="students-main">
                <Breadcrumbs headingthree='Admin Dashboard' breadcrumbOne='Home' breadcrumbSecond='Student' />
                <div className="row">
                    <div className="col-md-12">
                        <StudentsInfromation />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="box-admin card">
                            <AdminBox icon={<LuNotebookPen />} title={'Notification'} number={12} iconBgColor="#f3e5f5" iconColor="#8e24aa" />
                       
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="box-admin  card">
                            <AdminBox icon={<MdOutlineEventNote />} title={'Events'} number={6} iconBgColor="#e1f1ff" iconColor="#3f7afc" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="box-admin  card">
                            <AdminBox icon={<MdOutlinePercent />} title={'Attendance'} number={12} iconBgColor="#fff2d8" iconColor="#ffa001" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        
                        <StudentTable/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <StudentsChart />
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <EventCalendar />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        <NoticeBoard/>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-md-12">
                       <CopyRights/> 
                    </div>
                  </div>
            </div>
        </>
    )
}