import { Header } from "../../components/NavBar/Header";
import "../../js/index.js";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <img
          src={require("../../images/background.png")}
          alt="bg"
          className="parallax bg-img"
        />
        <img
          src={require("../../images/fog_7.png")}
          alt="bg"
          className="parallax fog-7"
        />
        <img
          src={require("../../images/mountain_10.png")}
          alt="bg"
          className="parallax mountain-10"
        />
        <img
          src={require("../../images/fog_6.png")}
          alt="bg"
          className="parallax fog-6"
        />
        <img
          src={require("../../images/mountain_9.png")}
          alt="bg"
          className="parallax mountain-9"
        />
        <img
          src={require("../../images/mountain_8.png")}
          alt="bg"
          className="parallax mountain-8"
        />
        <img
          src={require("../../images/fog_5.png")}
          alt="bg"
          className="parallax fog-5"
        />
        <img
          src={require("../../images/mountain_7.png")}
          alt="bg"
          className="parallax mountain-7"
        />
        <div className="text parallax">
          <h2>China</h2>
          <h1>Zhangjiajie</h1>
        </div>
        <img
          src={require("../../images/mountain_6.png")}
          alt="bg"
          className="parallax mountain-6"
        />
        <img
          src={require("../../images/fog_4.png")}
          alt="bg"
          className="parallax fog-4"
        />
        <img
          src={require("../../images/mountain_5.png")}
          alt="bg"
          className="parallax mountain-5"
        />
        <img
          src={require("../../images/fog_3.png")}
          alt="bg"
          className="parallax fog-3"
        />
        <img
          src={require("../../images/mountain_4.png")}
          alt="bg"
          className="parallax mountain-4"
        />
        <img
          src={require("../../images/mountain_3.png")}
          alt="bg"
          className="parallax mountain-3"
        />
        <img
          src={require("../../images/fog_2.png")}
          alt="bg"
          className="parallax fog-2"
        />
        <img
          src={require("../../images/mountain_2.png")}
          alt="bg"
          className="parallax mountain-2"
        />
        <img
          src={require("../../images/mountain_1.png")}
          alt="bg"
          className="parallax mountain-1"
        />
        <img
          src={require("../../images/sun_rays.png")}
          alt="bg"
          className="sun-rays"
        />
        <img
          src={require("../../images/black_shadow.png")}
          alt="bg"
          className="black-shadow"
        />
        <img
          src={require("../../images/fog_1.png")}
          alt="bg"
          className="parallax fog-1"
        />
      </main>
    </>
  );
}
