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

    const [address, setAddress] = useState("")
    const [loading, setLoading] = useState("")
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div tw="height[100vh] w-full ">
            <div tw="flex items-center justify-center   w-full h-full" >
                <video tw="w-full h-full fixed inset-0 object-cover z-index[-10] bg-cover background-image[url(/assets/images/bg.jpg)]" autoPlay playsInline muted loop>
                    <source src="/assets/videos/heroani.mp4" type="video/mp4" />
                </video>
                <div tw="z-10 px-6 md:px-12 py-24 h-full w-full">
                    <div tw="flex items-center justify-center text-2xl font-bold md:text-4xl border-t-4 border-b-4 border-color[var(--greenDark)] h-full w-full">
                        <div tw="flex flex-col space-y-12 bg-black bg-opacity-90 px-4 md:px-8 py-12">
                            <div tw="flex flex-col space-y-4">
                                <span className="text-glow" tw="color[var(--greenDark)]">access mainframe</span>
                                <span className="text-glow" tw="color[var(--green)]">enter wallet address</span>
                            </div>
                            <div tw="flex color[var(--green)] space-x-4 py-4 items-center">
                                {/* <div tw="w-4 h-12 background-color[var(--green)] animate-pulse"></div> */}
                                <input tw="appearance-none caret-color[var(--green)] outline-none border-b border-color[var(--green)] bg-transparent " type="text" onChange={(e) => { setAddress(e.target.value) }} />

                                <svg xmlns="http://www.w3.org/2000/svg" tw="h-8 cursor-pointer hover:color[var(--greenDark)]" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
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

