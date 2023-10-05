import { Header } from "../../components/NavBar/Header";
import "../../js/index.js";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="vignette" />
        <img
          src={require("../../images/background.png")}
          data-speedx="0.3"
          data-speedy="0.38"
          alt="bg"
          className="parallax bg-img"
        />
        <img
          src={require("../../images/fog_7.png")}
          data-speedx="0.27"
          data-speedy="0.32"
          alt="bg"
          className="parallax fog-7"
        />
        <img
          src={require("../../images/mountain_10.png")}
          data-speedx="0.195"
          data-speedy="0.305"
          alt="bg"
          className="parallax mountain-10"
        />
        <img
          src={require("../../images/fog_6.png")}
          data-speedx="0.25"
          data-speedy="0.28"
          alt="bg"
          className="parallax fog-6"
        />
        <img
          src={require("../../images/mountain_9.png")}
          data-speedx="0.125"
          data-speedy="0.155"
          alt="bg"
          className="parallax mountain-9"
        />
        <img
          src={require("../../images/mountain_8.png")}
          data-speedx="0.1"
          data-speedy="0.11"
          alt="bg"
          className="parallax mountain-8"
        />
        <img
          src={require("../../images/fog_5.png")}
          data-speedx="0.16"
          data-speedy="0.105"
          alt="bg"
          className="parallax fog-5"
        />
        <img
          src={require("../../images/mountain_7.png")}
          data-speedx="0.1"
          data-speedy="0.1"
          alt="bg"
          className="parallax mountain-7"
        />
        <div className="text parallax" data-speedx="0.07" data-speedy="0.07">
          <h2>China</h2>
          <h1>Zhangjiajie</h1>
        </div>
        <img
          src={require("../../images/mountain_6.png")}
          data-speedx="0.065"
          data-speedy="0.05"
          alt="bg"
          className="parallax mountain-6"
        />
        <img
          src={require("../../images/fog_4.png")}
          data-speedx="0.135"
          data-speedy="0.115"
          alt="bg"
          className="parallax fog-4"
        />
        <img
          src={require("../../images/mountain_5.png")}
          data-speedx="0.08"
          data-speedy="0.100"
          alt="bg"
          className="parallax mountain-5"
        />
        <img
          src={require("../../images/fog_3.png")}
          data-speedx="0.11"
          data-speedy="0.018"
          alt="bg"
          className="parallax fog-3"
        />
        <img
          src={require("../../images/mountain_4.png")}
          data-speedx="0.059"
          data-speedy="0.024"
          alt="bg"
          className="parallax mountain-4"
        />
        <img
          src={require("../../images/mountain_3.png")}
          data-speedx="0.04"
          data-speedy="0.018"
          alt="bg"
          className="parallax mountain-3"
        />
        <img
          src={require("../../images/fog_2.png")}
          data-speedx="0.15"
          data-speedy="0.0115"
          alt="bg"
          className="parallax fog-2"
        />
        <img
          src={require("../../images/mountain_2.png")}
          data-speedx="0.0235"
          data-speedy="0.13"
          alt="bg"
          className="parallax mountain-2"
        />
        <img
          src={require("../../images/mountain_1.png")}
          data-speedx="0.027"
          data-speedy="0.18"
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
          data-speedx="0.12"
          data-speedy="0.01"
          alt="bg"
          className="parallax fog-1"
        />
      </main>
    </>
  );
}
