// styles
import './navbar.scss';
// tools
import { useTheme } from '../../hooks/useTheme';
// icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

export default function Navbar() {
  const { dispatch } = useTheme();
  const { theme } = useTheme();

  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <div className={ theme === 'light' ? 'navbar' : 'navbar dark' }>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>

        <div className="items-container">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>

          <div className="item" onClick={ changeTheme }>
            <DarkModeOutlinedIcon className='icon' />
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>

          <div className="item">
            <div className="badge">2</div>
            <NotificationsNoneOutlinedIcon className='icon' />
          </div>

          <div className="item">
            <div className="badge">1</div>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
          </div>

          <div className="item">
            <ListOutlinedIcon className='icon' />
          </div>


          <div className="item">
            <img src="/avatar/harsha.jpg" alt="avatar" className="avatar" />
          </div>

        </div>
      </div>
    </div>
  );
}