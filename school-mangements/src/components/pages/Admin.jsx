
import { AdminBox } from "../boxAdmin/boxAdmin"
import { Breadcrumbs } from "../breadcrumbs/Breadcrumb"
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import EarningsChart from "../Earnings/earnings";
import ExpensesChart from "../expenses/expenses";
import StudentsChart from "../studentsDashboard/Students";
import EventCalendar from "../event-calender/EventCalender";
import { HeadingThree } from "../headingThree/headingThree";
import { Websitetraffic } from "../website-traffic/websiteTraffic";
import { NoticeBoard } from "../notice-board/noticeBoard";

export const Dashboard = () => {
    return (
        <>
            <div className="admin-main">
                <Breadcrumbs headingthree='Admin Dashboard' breadcrumbOne='Home' breadcrumbSecond='Admin' />
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="box-admin">
                            <AdminBox icon={<WcOutlinedIcon />} title={'Students'} number={150000} iconBgColor="#d1f3e0" iconColor="#3cb878" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="box-admin">
                            <AdminBox icon={<GroupsOutlinedIcon />} title={'Teachers'} number={2250} iconBgColor="#e1f1ff" iconColor="#3f7afc" />

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="box-admin">
                            <AdminBox icon={<GroupOutlinedIcon />} title={'Parents'} number={5690} iconBgColor="#fff2d8" iconColor="#ffa001" />

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="box-admin">
                            <AdminBox icon={<CurrencyRupeeOutlinedIcon />} title={'Earnings'} number={193300} iconBgColor="#ffeaea" iconColor="#ff0000" />

                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-8 col-12 col-sm-6">
                        <EarningsChart />
                    </div>
                    <div className="col-md-4 col-12 col-sm-6">
                        <ExpensesChart />
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-6 col-sm-12 col-12">
                        <StudentsChart />
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <EventCalendar />

                    </div>
                    <HeadingThree />
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <Websitetraffic/>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                     <NoticeBoard/>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                    
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                    
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                    
                    </div>
                </div>
              </div>

        </>
    )
}