import { AdminBox } from "../boxAdmin/boxAdmin"
import { Breadcrumbs } from "../breadcrumbs/Breadcrumb"
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { GrNotes } from "react-icons/gr";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import StudentsChart from "../studentsDashboard/Students";
import { StudentsInfromation } from "../StudentsPage/studentsPage";
import { MyKids } from "../MyKids/MyKids";
import { HeadingThree } from "../headingThree/headingThree";

export const Parents = () => {
    return (
        <>
            <div className="parents-main">
                <Breadcrumbs headingthree='Admin Dashboard' breadcrumbOne='Home' breadcrumbSecond='Parents' />
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="box-admin card card p-3">
                            <AdminBox icon={<LiaMoneyBillWaveAltSolid />} title={'Due Fees'} number={4503} iconBgColor="#ffeaea" iconColor="#ff0000" />

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="box-admin card card p-3">
                            <AdminBox icon={<GrNotes />} title={'Notification'} number={12} iconBgColor="#f3e5f5" iconColor="#8e24aa" />

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="box-admin card card p-3">
                            <AdminBox icon={<RiGraduationCapLine />} title={'Result'} number={16} iconBgColor="#fff2d8" iconColor="#ffa001" />

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="box-admin card card p-3">
                            <AdminBox icon={<FaRegMoneyBillAlt />} title={'Expenses'} number={193000} iconBgColor="#e1f1ff" iconColor="#3f7afc" />

                        </div>
                    </div>
                </div>
                  
                  <div className="row card p-3">
                    <div className="col-md-12">
                        <HeadingThree title={"My Kids"}/>
                       <MyKids/>
                    </div>
                  </div>

            </div>
        </>
    )
}