// styles
import './sidebar.scss';
// tools
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <div className={ theme === 'light' ? 'sidebar' : 'sidebar dark' }>

      <div className="top">
        <Link to='/' className="logo">myAdmin</Link >
      </div>

      <div className="bottom">
        <ul className='link-container'>
          <p className="title">MAIN</p>
          <Link to='/' className='link'>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </Link>

          <p className="title">LISTS</p>
          <Link to='/users' className='link'>
            <GroupIcon className='icon' />
            <span>Users</span>
          </Link>

          <Link to='/products' className='link'>
            <CategoryIcon className='icon' />
            <span>Products</span>
          </Link>

          <li className='link'>
            <StoreIcon className='icon' />
            <span>Orders</span>
          </li>

          <li className='link'>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li className='link'>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>

          <li className='link'>
            <NotificationsNoneIcon className='icon' />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li className='link'>
            <HealthAndSafetyIcon className='icon' />
            <span>System Health</span>
          </li>

          <li className='link'>
            <SystemUpdateAltIcon className='icon' />
            <span>Logs</span>
          </li>

          <li className='link'>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li className='link'>
            <AccountBoxIcon className='icon' />
            <span>Profile</span>
          </li>

          <li className='link'>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>

        </ul>
      </div>
    </div>
  );
}