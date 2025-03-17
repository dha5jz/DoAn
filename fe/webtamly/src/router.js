import { ROUTERS } from "./utils/router";
import HomePage from "./page/user/homepage";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./page/user/theme/masterLayout";
import ContactPage from "./page/user/contactPage/homepage";
import SchoolIntro from "./page/user/schoolIntro/homepage";
import SystemIntro from "./page/user/systemIntro";
import ConsultationForm from "./page/user/consultationForm";
import FAQ from "./page/user/FAQ";
import TestResultGuide from "./page/user/ResultGuide";
import ReferenceMaterials from "./page/user/ReferenceMaterials";
import PsychologyQA from "./page/user/PsychologyQA";
import SupportPage from "./page/user/supportPage";
import AssessmentPage from "./page/user/assessmentPage";
import DepressionTest from "./page/user/depressionTest/DepressionTest";
import TestGuide from "./page/user/TestGuide";
import ProfileUpdate from "./page/user/profileUpdate";
import ChangePassword from "./page/user/ChangePassword";
import AssessmentHistory from "./page/user/AssessmentHistory";


import AdminLayout from "./page/admin/theme/adminLayout";
import AdminHomePage from "./page/admin/aHomePage";
import UserManagement from "./page/admin/userManager/userManager";
import StudentResults from "./page/admin/studentResult/studentResult";
import StudentPermissions from "./page/admin/studentPermission/studentPremission";
import ManageQuestions from "./page/admin/managerQuestion/managerQuestion";
import AddQuestion from "./page/admin/addQuestion/addQuestion";
import EditQuestion from "./page/admin/editQuestion/editQuestion";
import ScheduleRequests from "./page/admin/ScheduleRequests/ScheduleRequest";
import ScheduleList from "./page/admin/ScheduleList/ScheduleList";
import GeneralReport from "./page/admin/GeneralReport/GeneralReport";
import IndividualReport from "./page/admin/IndividualReport/IndividualReport";
import Logout from "./page/admin/Logout/Logout";
import ChangePassword1 from "./page/admin/ChangePassword/ChangePassword";

const isAdmin = true;
const renderUserRouter = () => {
  const userRouters = [
    { path: ROUTERS.USER.HOME, component: <HomePage /> },
    { path: ROUTERS.USER.PROFILE, component: <ProfileUpdate /> },
    { path: ROUTERS.USER.CONTACT, component: <ContactPage /> },
    { path: ROUTERS.USER.SCHOOL, component: <SchoolIntro /> },
    { path: ROUTERS.USER.SYSTEM, component: <SystemIntro /> },
    { path: ROUTERS.USER.CONSULTATIONFORM, component: <ConsultationForm /> },
    { path: ROUTERS.USER.FAQ, component: <FAQ /> },
    { path: ROUTERS.USER.RESULTGUIDE, component: <TestResultGuide /> },
    { path: ROUTERS.USER.TESTGUIDE, component: <TestGuide /> },

    { path: ROUTERS.USER.REFERENCEMATERIALS, component: <ReferenceMaterials /> },
    { path: ROUTERS.USER.PSYCHOLOGYQA, component: <PsychologyQA /> },
    { path: ROUTERS.USER.SUPPORT, component: <SupportPage /> }, 
    { path: ROUTERS.USER.ASSESSMENT, component: <AssessmentPage /> }, 
    { path: ROUTERS.USER.DEPRESSION_TEST, component: <DepressionTest /> },
    { path: ROUTERS.USER.CHANGEPASSWORD, component: <ChangePassword/> },
    { path: ROUTERS.USER.AssessmentHistory, component: <AssessmentHistory/> },


  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const renderAdminRouter = () => {
    const adminRouters = [
      { path: ROUTERS.ADMIN.HOME, component: <AdminHomePage/>}, 
      { path: ROUTERS.ADMIN.USERMANAGEMENT, component: <UserManagement/>}, 
      { path: ROUTERS.ADMIN.STUDENTRESULT, component: <StudentResults/>},
      { path: ROUTERS.ADMIN.STUDENTPERMISSION, component: <StudentPermissions/>}, 
      { path: ROUTERS.ADMIN.MANAGERQUESTION, component: <ManageQuestions/>}, 
      { path: ROUTERS.ADMIN.ADDQUESTION, component: <AddQuestion/>},
      { path: ROUTERS.ADMIN.EDITQUESTION, component: <EditQuestion/>}, 
      { path: ROUTERS.ADMIN.SCHEDULEREQUESTS, component: <ScheduleRequests/>}, 
      { path: ROUTERS.ADMIN.SCHEDULELIST, component: <ScheduleList/>}, 
      { path: ROUTERS.ADMIN.GENERALREPORT, component: <GeneralReport/>}, 
      { path: ROUTERS.ADMIN.INDIVIDUALREPORT, component: <IndividualReport/>}, 
      { path: ROUTERS.ADMIN.CHANGEPASSWORD, component: <ChangePassword1/>}, 
      { path: ROUTERS.ADMIN.LOGOUT, component: <Logout/>}, 


    ];
  
    return (
      <AdminLayout>
        <Routes>
          {adminRouters.map((item, key) => (
            <Route key={key} path={item.path} element={item.component} />
          ))}
        </Routes>
      </AdminLayout>
    );
  };
  
  const RouterCustom = () => {
    return <>{isAdmin ? renderAdminRouter() : renderUserRouter()}</>;
  };
  
  export default RouterCustom;