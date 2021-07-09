import { useState } from "react"
// import woosh from './public/assets/sound/woosh.wav'
import tw from "twin.macro"
import Info from "../../../info";
import Popup from "../../../popup";


function Hero() {


    function handleClick() {
        new Audio('/assets/sound/scan/Scan.wav').play();
        setLoading("Loading...")
        setTimeout(function () {
            //your code to be executed after 1 second
            new Audio('/assets/sound/robot/robot1.wav').play();
            setShowPopup(true)
            setLoading("")
        }, 2000);
    }

    const [address, setAddress] = useState("00000000000")
    const [loading, setLoading] = useState("")
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div tw="height[100vh] min-height[840x] w-full bg-cover background-image[url('/assets/images/bg.png')] font-family[bungee] ">
            <div tw="flex items-center justify-evenly h-full w-full flex-col bg-black bg-opacity-80">
                {/* <img tw=" px-4 md:(width[500px] static)  top-16 z-10 md:mb-8" src="/assets/images/autostake_light.svg" alt="" /> */}

                {/* Vault  */}
                <div tw="flex flex-1 md:flex[1] w-full items-center justify-center relative bg-center  md:(width[900px] height[900px] rounded-full bg-cover) background-image[url('/assets/images/vaultv2.png')] sm:background-image[url('/assets/images/vaultv2.png')]">

                    <div tw=" flex flex-col space-y-6 items-center  justify-center rounded-full  md:p-16 p-8 text-center max-w-full width[400px] height[400px] md:(width[450px] height[450px]) uppercase font-extrabold text-2xl text-white">
                        {/* <span>Access System</span>
                        <div tw="h-10 overflow-hidden  flex items-center justify-center text-xl tracking-widest  bg-black border border-gray-600">
                            {address}
                        </div> */}
                        <span>Enter Wallet address to access mainframe</span>
                        <div tw="flex items-center justify-center text-xl tracking-widest h-10 px-2   bg-black border border-gray-600">
                            <input tw="appearance-none outline-none bg-transparent text-center" type="text" />
                        </div>
                        <span>{loading}</span>
                        <button tw=" w-16 h-16 bg-center  background-image[url('/assets/images/button.png')] appearance-none" onClick={handleClick} className="depth" type="button">
                            {/* <img src="/assets/images/button.svg" alt="" /> */}

                        </button>
                    </div>

                </div>
            </div>
            <Popup toggle={showPopup} setToggle={setShowPopup}>
                <Info address={address} setOpenPopup={setShowPopup} />
            </Popup>
        </div>
    )
}

export default Hero
