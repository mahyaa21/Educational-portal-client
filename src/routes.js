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
import AdminNotifications from "views/admin/Notifications.jsx";
import AdminIcons from "views/admin/Icons.jsx";
import AdminTypography from "views/admin/Typography.jsx";
import AdminTableList from "views/admin/Tables.jsx";
import AdminMaps from "views/admin/Map.jsx";
import AdminUserPage from "views/admin/User.jsx";
//teacher routes address
import Dashboard from "views/teacher/Dashboard.jsx";
import Notifications from "views/teacher/Notifications.jsx";
import Icons from "views/teacher/Icons.jsx";
import Typography from "views/teacher/Typography.jsx";
import TableList from "views/teacher/Tables.jsx";
import Maps from "views/teacher/Map.jsx";
import UserPage from "views/teacher/User.jsx";
//student routes address
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
      component: AdminDashboard,
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
      path: "/maps",
      name: "ثبت دوره جدید",
      icon: "nc-icon nc-hat-3",
      component:AdminMaps ,
      layout: "/admin"
    },
    {
      path: "/notifications",
      name: "ثبت نام کاروندان",
      icon: "nc-icon nc-badge",
      component: AdminNotifications ,
      layout: "/admin"
    },
    {
      path: "/user-page",
      name: "User Profile",
      icon: "nc-icon nc-single-02",
      component: AdminUserPage,
      layout: "/admin"
    },
    {
      path: "/tables",
      name: "Table List",
      icon: "nc-icon nc-tile-56",
      component: AdminTableList,
      layout: "/admin"
    },
    {
      path: "/typography",
      name: "Typography",
      icon: "nc-icon nc-caps-small",
      component: AdminTypography,
      layout: "/admin"
  },
  {
    path: "/icons",
    name: "ثبت کاربر جدید",
    icon: "nc-icon nc-single-02",
    component: AdminIcons ,
    layout: "/admin"
  },
  ]
export let TeacherRoutes = [
  {
    path: "/dashboard",
    name: "داشبورد",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/teacher"
  },
  {
    path: "/icons",
    name: "ارسال تکلیف جدید",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/teacher"
  },
  {
    path: "/maps",
    name: "لیست تکالیف کاروندان",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/teacher"
  },
  {
    path: "/notifications",
    name: "لیست نمرات",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/teacher"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/teacher"
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/teacher"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
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
    path: "/icons",
    name: "ارسال تکلیف جدید",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/student"
  },
  {
    path: "/maps",
    name: "دریافت تکالیف",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/student"
  },
  {
    path: "/notifications",
    name: "نمرات",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/student"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/student"
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/student"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/student"
  },
]


