import "./Navbar.scss";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Search Bar */}
        <div className="search">
          {/* <input type="text" placeholder="Search" />
          <SearchOutlinedIcon className="icon" /> */}
        </div>
        <div className="items">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              English
            </div>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <div className="item">
              <DarkModeOutlinedIcon className="icon" />
            </div>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon" />
            </div>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </div>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="counter">2</div>
            </div>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <div className="item">
              <ListOutlinedIcon className="icon " />
            </div>
          </Link>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
