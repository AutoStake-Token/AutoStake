import tw from 'twin.macro'
import { faqdata } from './faq.data'
import Card from './card'
import { useState } from 'react'
import Popup from '../../../popup'
import Audit from '../../../audit'

function Faq() {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div id="faq" tw="flex bg-cover min-h-screen  ">
            <div tw="flex flex-col flex-1 items-center space-y-12 justify-center  py-8 px-4 md:px-32">

                <h1 className="text-glow" tw="text-3xl lg:text-7xl color[#7fc17f] text-center ">Frequently Asked Questions</h1>

                <div tw="flex flex-col space-y-8  justify-center md:p-6 py-8 w-full  md:w-3/4">
                    {faqdata.map((feature, index) =>
                        <Card data={feature} key={index} />
                    )}

                </div>
                <span className="box-glow text-glow" tw="border border-color[#7fc17f] color[#3c5a3c]  text-3xl  py-4 px-10 rounded-sm cursor-pointer" onClick={() => setShowPopup(true)}>Show Audit</span>
            </div>
            <Popup toggle={showPopup} setToggle={setShowPopup}>
                <Audit setOpenPopup={setShowPopup} />
            </Popup>
        </div>
    )
}

export default Faq
