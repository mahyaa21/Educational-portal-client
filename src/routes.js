/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// admin routes address
import AdminDashboard from "views/admin/Dashboard.jsx";
import AdminAddUser from "views/admin/addUser.jsx";
import AdminAddCourse from "views/admin/addCourse.jsx";
import AdminCourseList from "views/admin/courseList.jsx"
import AdminIcons from "views/admin/Icons.jsx";
import AdminTypography from "views/admin/Typography.jsx";
import AdminTableList from "views/admin/Tables.jsx";
import AdminUserPage from "views/admin/User.jsx";
//teacher routes address
import Dashboard from "views/teacher/Dashboard.jsx";
import Notifications from "views/teacher/Notifications.jsx";
import Icons from "views/teacher/Icons.jsx";
import Typography from "views/teacher/Typography.jsx";
import TableList from "views/teacher/Tables.jsx";
import DownloadTecherHomeWorks from "views/teacher/DownloadTecherHomeWorks.jsx";
import UserPage from "views/teacher/User.jsx";
import TeacherSearchCourse from 'views/teacher/SearchCourse.jsx';
import LoginPage from "views/login/login.jsx";
//student routes address
import PostHomeWork from 'views/student/PostHomeWork.jsx';
import DownloadHomeWorks from 'views/student/DownloadHomeWorks.jsx'
// import Dashboard from "views/student/Dashboard.jsx";
// import Notifications from "views/student/Notifications.jsx";
// import Icons from "views/student/Icons.jsx";
// import Typography from "views/student/Typography.jsx";
// import TableList from "views/student/Tables.jsx";
// import Maps from "views/student/Map.jsx";
// import UserPage from "views/student/User.jsx";
export let AdminRoutes = [
  {
    path: "/dashboard",
    name: "داشبورد",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/addUser",
    name: "ثبت کاربر جدید",
    icon: "nc-icon nc-single-02",
    component: AdminAddUser ,
    layout: "/admin"
  },
    {
      path: "/addcourse",
      name: "ثبت دوره جدید",
      icon: "nc-icon nc-hat-3",
      component: AdminAddCourse ,
      layout: "/admin"
    },
    {
      path: "/registercourseuser",
      name: "لیست دوره ها",
      icon: "nc-icon nc-badge",
      component: AdminCourseList ,
      layout: "/admin"
    },
  ]
export let TeacherRoutes = [
  {
    path: "/dashboard",
    name: "مدیریت تکالیف",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/teacher"
  },
  {
    path: "/upload",
    name: "ارسال تکلیف جدید",
    icon: "nc-icon nc-diamond",
    component: TeacherSearchCourse,
    layout: "/teacher"
  },
  {
    path: "/download",
    name: "لیست تکالیف کاروندان",
    icon: "nc-icon nc-pin-3",
    component: DownloadTecherHomeWorks,
    layout: "/teacher"
  },
  {
    path: "/notifications",
    name: "لیست نمرات",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/teacher"
  },

]
export let StudentRoutes = [
  {
    path: "/dashboard",
    name: "داشبورد",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/student"
  },
  {
    path: "/posthomework",
    name: "ارسال تکلیف جدید",
    icon: "nc-icon nc-diamond",
    component: PostHomeWork,
    layout: "/student"
  },
  {
    path: "/downloadhomework",
    name: "دریافت تکالیف",
    icon: "nc-icon nc-pin-3",
    component: DownloadHomeWorks,
    layout: "/student"
  },
  {
    path: "/notifications",
    name: "نمرات",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/student"
  },
]

export let LoginRoute = {
  path: "/",
  name: "Typography",
  icon: "nc-icon nc-caps-small",
  component: LoginPage,
  layout: "/login"
}

