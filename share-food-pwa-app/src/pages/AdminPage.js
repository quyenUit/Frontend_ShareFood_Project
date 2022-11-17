import MainDash from "./../admindashboard/components/MainDash/MainDash";
import Sidebar from "./../admindashboard/components/Sidebar/Sidebar";
import RightSide from "./../admindashboard/components/RightSide/RightSide";
import "./../styles/AdminPage.css";
const AdminPage = () => {
  return (
    <div id="admin-dashboard-bg">
      <div className="Dashboard-App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
