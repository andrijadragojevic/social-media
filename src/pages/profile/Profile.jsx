import "./profile.scss";
import { FacebookTwoTone } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Pinterest } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Place } from "@mui/icons-material";
import { Language } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import Posts from "../../componenets/posts/Posts"


function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="" className="profile-img" />
      </div>
      <div className="profile-container">
        <div className="profile-info">
          <div className="left">
            <a href="">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="">
              <Instagram fontSize="large" />
            </a>
            <a href="">
              <Twitter fontSize="large" />
            </a>
            <a href="">
              <LinkedIn fontSize="large" />
            </a>
            <a href="">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Foo Bar</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>United States</span>
              </div>  
              <div className="item">
                <Language />
                <span>foo-bar.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>

      </div>

      <Posts />

    </div>
  )
}

export default Profile