import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <img
              src="https://blog.shift4shop.com/hs-fs/hubfs/coming%20soon.png?width=900&name=coming%20soon.png"
              alt=""
              className="unrelease"
            />
      
           
          </div>
       
    </div>
  );
};
export default Home;
