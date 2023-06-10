import "./mainNav.scss"
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
  // ICONS
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { AuthContext } from "../../context/authContext";

const MainNav = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);


  return (
    <div className="mainNav">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">Social_Media</span>
        </Link>
        <HomeIcon />
        {darkMode ? 
        (<WbSunnyIcon onClick={toggle} />)
        :
        (<DarkModeIcon onClick={toggle} />)
        }

        <AppsIcon />
        <div className="search">
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
      <div className="right">
        <AccountCircleIcon />
        <EmailIcon />
        <NotificationsIcon />
        <div className="user">
          <img src={currentUser.profilePicture} alt="" />
          <span className="name">{currentUser.name}</span>
        </div>
      </div>

    </div>
  )
}

export default MainNav