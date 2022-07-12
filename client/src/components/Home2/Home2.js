import "./Home2.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div class="homeContainer">
        <Navbar />

        <img
          src="https://social.dnsmadeeasy.com/wp-content/uploads/2017/06/AdobeStock_139559217.png"
          alt=""
          className="unrelease"
        />
      </div>
    </div>
  );
};
export default Home;
