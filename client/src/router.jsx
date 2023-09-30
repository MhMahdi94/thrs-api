
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';
import Admins from './views/Admins';
import Companies from './views/Companies';
import Departments from './views/Departments';
import DepartmentAdd from './views/DepartmentAdd';
import DepartmentEdit from './views/DepartmentEdit';
import Employees from './views/Employees';
import EmployeeAdd from './views/EmployeeAdd';
import EmployeeEdit from './views/EmployeeEdit';
import AdminAdd from './views/AdminAdd';
import AdminEdit from './views/AdminEdit';
import Attendence from './views/Attendence';
import Salaries from './views/Salaries';
import Leave from './views/Leave';
import Startup from './views/Startup';
import CompanyAdd from './views/CompanyAdd';
import CompanyEdit from './views/CompanyEdit';
import UserAdd from './views/UserAdd';
import UserEdit from './views/UserEdit';
import NewRequests from './views/NewRequests';
import { Calender } from './views/Calender';
import Packages from './views/Packages';
import PackageAdd from './views/PackageAdd';
import PackageEdit from './views/PackageEdit';
import AttendenceDetails from './views/AttendenceDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {path: '/',element:<Navigate to='/dashboard'/>},
            {
                path: '/dashboard',
                
                element: <Dashboard />
            },
            {
                path: '/calender',
                
                element: <Calender />
            },
            {
                path: '/packages',
                
                element: <Packages />
            },
            {
                path: '/new-package',
                
                element: <PackageAdd />
            },
            {
                path: '/edit-package/:id',
                
                element: <PackageEdit />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/new-requests',
                element: < NewRequests/>
            },
            {
                path: '/new-user',
                element: <UserAdd />
            },
            {
                path: '/edit-user/:id',
                element: <UserEdit />
            },
            {
                path: '/admins',
                element: <Admins />
            },
            {
                path: '/new-admin',
                element: <AdminAdd />
            },
            {
                path: '/edit-admin/:id',
                element: <AdminEdit />
            },
            {
                path: '/companies',
                element: <Companies />
            },
            {
                path: '/new-company',
                element: <CompanyAdd />
            },
            {
                path: '/edit-company/:id',
                element: <CompanyEdit />
            },
            {
                path: '/departments',
                element: <Departments />,
                
            },
            {
                path: '/new-department',
                element: <DepartmentAdd />
            },
            {
                path: '/edit-department/:id',
                element: <DepartmentEdit />
            },
            {
                path: '/employees',
                element: <Employees />
            },
            {
                path: '/new-employee',
                element: <EmployeeAdd />
            },
            {
                path: '/edit-employee/:id',
                element: <EmployeeEdit />
            },
            {
                path: '/attendence',
                element: <Attendence />
            },
            {
                path: '/attendence-details/:id',
                element: <AttendenceDetails />
            },
            {
                path: '/salaries',
                element: <Salaries />
            },
            {
                path: '/leave',
                element: <Leave />
            },
           
        ]
    },
    {
        path: '/',
        element: <GuestLayout />
        , children: [
            {
                path:'/',
                element:<Navigate to='/startup'/>
            },
            {
                path:'/startup',
                element:<Startup/>
            },
            
            ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;