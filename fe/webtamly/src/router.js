import { ROUTERS } from "./utils/router";
import HomePage from "./page/user/homepage";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./page/user/theme/masterLayout";
import ProfilePage from "./page/user/profileUpdate";
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
    { path: ROUTERS.USER.CHANGEPASSWORD, component: <ChangePassword /> },
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

const RouterCustom = () => {
  return <>{renderUserRouter()}</>;
};

export default RouterCustom;
