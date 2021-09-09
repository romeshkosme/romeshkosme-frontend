import React from "react";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";
import CreateBlog from "../CreateBlog/CreateBlog";
import BlogTable from "../BlogTable/BlogTable";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardNavigation />
      <div className="flex">
        {/* sidebar menu */}
        <div className="border-r border-gray-400 h-screen px-3 pt-3 w-32">
          <ul>
            <li>Dashboard</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* action area */}
        <div className="p-2 w-full">
          <BlogTable />
          {/* <CreateBlog /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
