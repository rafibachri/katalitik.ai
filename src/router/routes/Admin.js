import { lazy } from "react";

const Admin = lazy(() => import("../../views/Home"));

const Report = lazy(() => import("../../views/Report"));

const UserList = lazy(() => import("../../views/admin/user/UserList"));
const UserForm = lazy(() => import("../../views/admin/user/UserForm"));
const RoleList = lazy(() => import("../../views/admin/role/RoleList"));
const RoleForm = lazy(() => import("../../views/admin/role/RoleForm"));
const ModuleList = lazy(() => import("../../views/admin/module/ModuleList"));
const ModuleForm = lazy(() => import("../../views/admin/module/ModuleForm"));

const DashboardUser = lazy(() => import("../../views/DashboardUser"));

const Home = lazy(() => import("../../views/Home"));

const AdminRoutes = [
  { path: "/admin", element: <Admin />, meta: { layout: "full", publicRoute: false } },

  // Reports
  { path: "/admin/reports", element: <Report />, meta: { layout: "full", publicRoute: false } },

  // Admin
  { path: "/admin/module", element: <ModuleList />, meta: { layout: "full", publicRoute: true } },
  { path: "/admin/module/:moduleID?/:type", element: <ModuleForm />, meta: { layout: "full", publicRoute: true } },
  { path: "/admin/user", element: <UserList />, meta: { layout: "full", publicRoute: true } },
  { path: "/admin/user/:userID?/:type", element: <UserForm />, meta: { layout: "full", publicRoute: true } },
  { path: "/admin/role", element: <RoleList />, meta: { layout: "full", publicRoute: true } },
  { path: "/admin/role/:roleID?/:type", element: <RoleForm />, meta: { layout: "full", publicRoute: true } },

  // Dashboard User
  { path: "/admin/dashboard-user", element: <DashboardUser />, meta: { layout: "full", publicRoute: false } },


  { path: '/home', element: <Home />, meta: { layout: "full", publicRoute: true, } },

];

export default AdminRoutes;
