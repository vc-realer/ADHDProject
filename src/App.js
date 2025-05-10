import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useThemeStore from './store/themeStore';
import Settings from './pages/Settings';
import {
  Dashboard as DashboardIcon,
  Timer as TimerIcon,
  Assignment as AssignmentIcon,
  CardGiftcard as RewardsIcon,
  Person as ProfileIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

// Pages
import Dashboard from './pages/Dashboard';
import Pomodoro from './pages/Pomodoro';
import TaskList from './pages/TaskList';
import Rewards from './pages/Rewards';
import Profile from './pages/Profile';

// Components
import Layout from './components/Layout';

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/'
    },
    {
      text: 'Pomodoro',
      icon: <TimerIcon />,
      path: '/pomodoro'
    },
    {
      text: 'Tasks',
      icon: <AssignmentIcon />,
      path: '/tasks'
    },
    {
      text: 'Rewards',
      icon: <RewardsIcon />,
      path: '/rewards'
    },
    {
      text: 'Profile',
      icon: <ProfileIcon />,
      path: '/profile'
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
      path: '/settings'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App; 