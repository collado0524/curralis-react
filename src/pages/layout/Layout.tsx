import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 mt-14">
                    <Outlet />
                </div>
            </div>
        </> 
    );
  }