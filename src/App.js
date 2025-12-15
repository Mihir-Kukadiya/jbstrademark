import Login from "./Component/Login";
import Register from "./Component/Register";
import MyProfile from "./Component/MyProfile";
import LockScreen from "./Component/LockScreen";
import Navbar from "./Global/Navbar";
import Sidebar from "./Global/Sidebar";
import CrmDashboard from "./Component/CrmDashboard";
import FinanceDashboard from "./Component/FinanceDashboard";
import CRMAcc from "./Component/CRMAcc";
import CRMHearing from "./Component/CRMHearing";
import CRMTask from "./Component/CRMTask";
import CRMTrademark from "./Component/CRMTrademark";
import CRMInquiry from "./Component/CRMInquiry";
import CRMSendEmail from "./Component/CRMSendEmail";
import FinanceReceipt from "./Component/FinanceReceipt";
import MasterBranch from "./Component/MasterBranch";
import FinanceQuotation from "./Component/FinanceQuotation";
import FinanceSaleInvoice from "./Component/FinanceSaleInvoice";
import SettingsWhatsapp from "./Component/SettingsWhatsapp";
import SettingsEntryLogs from "./Component/SettingsEntryLogs";
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
