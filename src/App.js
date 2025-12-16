import Login from "./Component/Authentication/Login";
import Register from "./Component/Authentication/Register";
import MyProfile from "./Component/Other/MyProfile";
import LockScreen from "./Component/Other/LockScreen";
import Navbar from "./Global/Navbar";
import Sidebar from "./Global/Sidebar";
import CrmDashboard from "./Component/Dashboard/CrmDashboard";
import FinanceDashboard from "./Component/Dashboard/FinanceDashboard";
import CRMAcc from "./Component/CRM/CRMAcc";
import CRMHearing from "./Component/CRM/CRMHearing";
import CRMTask from "./Component/CRM/CRMTask";
import CRMTrademark from "./Component/CRM/CRMTrademark";
import CRMInquiry from "./Component/CRM/CRMInquiry";
import CRMSendEmail from "./Component/CRM/CRMSendEmail";
import FinanceReceipt from "./Component/Finance/FinanceReceipt";
import MasterBranch from "./Component/Master/MasterBranch";
import FinanceQuotation from "./Component/Finance/FinanceQuotation";
import FinanceSaleInvoice from "./Component/Finance/FinanceSaleInvoice";
import SettingsWhatsapp from "./Component/Settings/SettingsWhatsapp";
import SettingsEntryLogs from "./Component/Settings/SettingsEntryLogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/LockScreen" element={<LockScreen />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/" element={<CrmDashboard />} />
          <Route path="/FinanceDashboard" element={<FinanceDashboard />} />
          <Route path="/CRMAcc" element={<CRMAcc />} />
          <Route path="/CRMHearing" element={<CRMHearing />} />
          <Route path="/CRMTask" element={<CRMTask />} />
          <Route path="/CRMTrademark" element={<CRMTrademark />} />
          <Route path="/CRMInquiry" element={<CRMInquiry />} />
          <Route path="/CRMSendEmail" element={<CRMSendEmail />} />
          <Route path="/FinanceReceipt" element={<FinanceReceipt />} />
          <Route path="/MasterBranch" element={<MasterBranch />} />
          <Route path="/FinanceQuotation" element={<FinanceQuotation />} />
          <Route path="/FinanceSaleInvoice" element={<FinanceSaleInvoice />} />
          <Route path="/SettingsWhatsapp" element={<SettingsWhatsapp />} />
          <Route path="/SettingsEntryLogs" element={<SettingsEntryLogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
