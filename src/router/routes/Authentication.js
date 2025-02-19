import { lazy } from 'react';
import DashboardContainer from '../../views/DashboardContainer';

const Home = lazy(() => import("../../views/Home"))
const Dashboard = lazy(() => import("../../views/Dashboard"))
const Project = lazy(() => import("../../views/Project"))
const ChatHistory = lazy(() => import("../../views/ChatHistory"))
const Profile = lazy(() => import("../../views/Profile"))
const Login = lazy(() => import("../../views/auth/Login"))
const Register = lazy(() => import("../../views/auth/Register"))
const Unauthorize = lazy(() => import("../../views/Unauthorize"))

const AuthenticationRoutes = [
  // { path: '/home', element: <DashboardContainer />, meta: { layout: "full", publicRoute: false, } },
  { path: '/home', element: <Home />, meta: { layout: "full", publicRoute: true, } },
  { path: '/dashboard', element: <Dashboard />, meta: { layout: "full", publicRoute: true, } },
  { path: '/project', element: <Project />, meta: { layout: "full", publicRoute: true, } },
  { path: '/chatHistory', element: <ChatHistory />, meta: { layout: "full", publicRoute: true, } },
  { path: '/profile', element: <Profile />, meta: { layout: "full", publicRoute: false, } },
  { path: '/login', element: <Login />, meta: { layout: 'full', publicRoute: false, } },
  { path: '/register', element: <Register />, meta: { layout: 'full', publicRoute: true, } },
  { path: "/access-control", element: <Unauthorize />, meta: { layout: "full", publicRoute: false, } },
]

export default AuthenticationRoutes
