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
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";

// var routes = [
//   {
//     path: "/dashboard",
//     name: "داشبورد",
//     icon: "nc-icon nc-bank",
//     component: Dashboard,
//     layout: "/admin"
//   },
//   {
//     path: "/icons",
//     name: "ثبت کاربر جدید",
//     icon: "nc-icon nc-diamond",
//     component: Icons,
//     layout: "/admin"
//   },
//   {
//     path: "/maps",
//     name: "ثبت دوره جدید",
//     icon: "nc-icon nc-pin-3",
//     component: Maps,
//     layout: "/admin"
//   },
//   {
//     path: "/notifications",
//     name: "ثبت نام کاروندان",
//     icon: "nc-icon nc-bell-55",
//     component: Notifications,
//     layout: "/admin"
//   },
//   {
//     path: "/user-page",
//     name: "User Profile",
//     icon: "nc-icon nc-single-02",
//     component: UserPage,
//     layout: "/admin"
//   },
//   {
//     path: "/tables",
//     name: "Table List",
//     icon: "nc-icon nc-tile-56",
//     component: TableList,
//     layout: "/admin"
//   },
//   {
//     path: "/typography",
//     name: "Typography",
//     icon: "nc-icon nc-caps-small",
//     component: Typography,
//     layout: "/admin"
//   },
//   // helping nav bar
//   {
//     path: "/icons",
//     name: "ثبت کاربر جدید",
//     icon: "nc-icon nc-diamond",
//     component: Icons,
//     layout: "/admin"
//   },
//   {
//     path: "/maps",
//     name: "ثبت دوره جدید",
//     icon: "nc-icon nc-pin-3",
//     component: Maps,
//     layout: "/admin"
//   },
//   {
//     path: "/notifications",
//     name: "ثبت نام کاروندان",
//     icon: "nc-icon nc-bell-55",
//     component: Notifications,
//     layout: "/admin"
//   },
//   {
//     path: "/user-page",
//     name: "User Profile",
//     icon: "nc-icon nc-single-02",
//     component: UserPage,
//     layout: "/admin"
//   },
//   {
//     path: "/tables",
//     name: "Table List",
//     icon: "nc-icon nc-tile-56",
//     component: TableList,
//     layout: "/admin"
//   },
//   {
//     path: "/typography",
//     name: "Typography",
//     icon: "nc-icon nc-caps-small",
//     component: Typography,
//     layout: "/admin"
//   },
//   // {
//   //   pro: true,
//   //   path: "/upgrade",
//   //   name: "Upgrade to PRO",
//   //   icon: "nc-icon nc-spaceship",
//   //   component: UpgradeToPro,
//   //   layout: "/admin"
//   // }
// ];

// let routes = {
export let AdminRoutes = [
    {
      path: "/dashboard",
      name: "داشبورد",
      icon: "nc-icon nc-bank",
      component: Dashboard,
      layout: "/admin"
    },
    {
      path: "/icons",
      name: "ثبت کاربر جدید",
      icon: "nc-icon nc-single-02",
      component: Icons,
      layout: "/admin"
    },
    {
      path: "/maps",
      name: "ثبت دوره جدید",
      icon: "nc-icon nc-hat-3",
      component: Maps,
      layout: "/admin"
    },
    {
      path: "/notifications",
      name: "ثبت نام کاروندان",
      icon: "nc-icon nc-badge",
      component: Notifications,
      layout: "/admin"
    },
    {
      path: "/user-page",
      name: "User Profile",
      icon: "nc-icon nc-single-02",
      component: UserPage,
      layout: "/admin"
    },
    {
      path: "/tables",
      name: "Table List",
      icon: "nc-icon nc-tile-56",
      component: TableList,
      layout: "/admin"
    },
    {
      path: "/typography",
      name: "Typography",
      icon: "nc-icon nc-caps-small",
      component: Typography,
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
// }

