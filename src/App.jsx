import { useContext, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Auth/LoginPage.jsx'
import PremiumPage from './pages/PremiumPage'
import BlogPage from './pages/BlogPage'
import ContactusPage from './pages/ContactusPage'
import MainDashboard from './pages/maindashboard'
import ProfilePage from './pages/ProfilePage'
import SettingPage from './pages/dashboardpages/SettingPage.jsx'
import HelpPAge from './pages/dashboardpages/HelpPAge.jsx'
import Dashboard from "./pages/dashboardpages/Dashboard.jsx";
import SignupPage from "./pages/Auth/SignupPage.jsx"
import { UserContext } from './context/UserContext'
import UserPage from './pages/dashboardpages/Organizer/UserPage.jsx'
import CreateEvent from './pages/dashboardpages/Organizer/CreateEvent.jsx'
import ExpoEventsTable from './pages/dashboardpages/Organizer/ExpoEventsTable.jsx'
import ExpoList from './pages/ExpoList.jsx'
import EventDetail from './pages/EventDetail.jsx'
import ExhibitorExpoList from './pages/dashboardpages/Exhibitor/ExhibitorExpoList.jsx'
import RegisterExpo from './pages/dashboardpages/Exhibitor/RegisterExpo.jsx'
import ExhibitorRequestList from './pages/dashboardpages/Organizer/ExhibitorRequestList.jsx'
import ScheduleManagement from './pages/dashboardpages/Organizer/ScheduleManagement.jsx'


function App() {
  const { user } = useContext(UserContext)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/contact',
      element: <ContactusPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/premium',
      element: <PremiumPage />
    },
    {
      path: '/blog',
      element: <BlogPage />
    },
    {
      path: '/events',
      element: <ExpoList />
    },
    {
      path: '/event/:id',
      element: <EventDetail />
    },
    {
      path: '/dashboard',
      element: user?.role !== "attendee" ? <MainDashboard /> : <Navigate to={'/'} />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        },
        {
          path: 'users',
          element: <UserPage />
        },
        {
          path: 'createevent',
          element: <CreateEvent />
        },
        {
          path: 'events',
          element: user?.role == "organizer" ? <ExpoEventsTable /> : <ExhibitorExpoList />,
        },

        {
          path: 'exporegister/:id',
          element: <RegisterExpo />
        },
         {
          path: 'exhibitorrequestlist',
          element: <ExhibitorRequestList />
        },

        {
          path: 'setting',
          element: <SettingPage />
        },
        {
          path: 'help',
          element: <HelpPAge />
        },
        {
          path:'schedulemanagement',
          element:<ScheduleManagement/>
        }
      ]
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
