import { useState } from "react";
// import woosh from './public/assets/sound/woosh.wav'
import tw from "twin.macro";
import Info from "../../../info";
import Popup from "../../../popup";

function Hero() {
  function handleClick() {
    new Audio("/assets/sound/scan/Scan.wav").play();
    setLoading("Loading...");
    setTimeout(function () {
      //your code to be executed after 1 second
      new Audio("/assets/sound/robot/robot1.wav").play();
      setShowPopup(true);
      setLoading("");
    }, 2000);
  }

  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div tw="min-h-screen w-full ">
      <div tw="flex items-center justify-center min-h-screen h-full">
        <video
          tw="w-full h-full fixed inset-0 object-cover z-index[-10] bg-cover background-image[url(/assets/images/bg.jpg)]"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/assets/videos/heroani.mp4" type="video/mp4" />
        </video>
        <div tw="flex flex-col-reverse lg:flex-row color[var(--green)] items-center justify-center z-10 px-6 md:px-12 py-32 h-full w-full">
          <div tw="flex flex-col items-center justify-center lg:w-3/5">
            <h1 tw="text-3xl lg:text-6xl font-bold mb-12">
              What is a “ReBased” token?
            </h1>
            <p tw="">
              A rebase (or price elastic) token is designed in a way that the
              circulating supply of a token is not fixed. The supply can be
              increased or decreased automatically by the contract. Enabling the
              token supply to fluctuate based on the token price at any given
              moment. This appeals to investors in that the value of the holders
              wallet stays the same, while the supply fluctuates to ensure
              continual bullish price action on the chart. From a technical
              analysis standpoint; a rebased token is every traders wet dream!
            </p>
            <div tw="flex items-start mt-12 w-full">
              <div tw="flex items-center justify-center px-8 py-2 cursor-pointer border-2 border-color[var(--green)]">
                <a href="https://t.me/ReBasedd">Join Telegram</a>
              </div>
            </div>
          </div>

          <div tw="lg:w-2/5 h-full flex items-center justify-center mb-8  lg:mt-0">
            <img src="/assets/arrow.png" alt="" />
          </div>
        </div>
      </div>
      {/* <Popup toggle={showPopup} setToggle={setShowPopup}>
                <Info address={address} setOpenPopup={setShowPopup} />
            </Popup> */}
    </div>
  );
}

export default Hero;
