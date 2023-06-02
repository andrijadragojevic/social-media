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

const MainNav = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);


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
          <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
          <span className="name">FirstName_LastName</span>
        </div>
      </div>

    </div>
  )
}

export default MainNav