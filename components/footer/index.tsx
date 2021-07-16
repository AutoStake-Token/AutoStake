import tw from "twin.macro"
import Link from "next/link"
import { footerdata } from "./footer.data"
import Social from "../social"

function Footer() {
    return (
        <div tw="md:height[45vh]  relative ">
            <div className="ellips"></div>
            <div tw="flex  items-center  h-full bg-cover justify-center relative background-color[#121111] background-image[url('/assets/images/bg.png')] ">
                <div tw="flex flex-col-reverse md:flex-row md:items-center justify-center py-8 space-y-12 md:space-y-0 md:space-x-24 px-8 md:px-24 h-full w-full bg-black bg-opacity-80">
                    <div tw="md:width[620px] flex flex-col space-y-12 items-center pt-8">
                        <img tw="md:width[400px]" src="/assets/images/autostake_light.svg" alt="" />
                        <p tw="text-white text-sm text-center">Trading cryptocurrencies carries a high level of risk, and may not be suitable for all investors. Before deciding to trade cryptocurrency you should carefully consider your investment objectives, level of experience, and risk appetite. You should be aware of all the risks associated with cryptocurrency trading. Please trade wisely!
                            <br /> -AutoStake Team
                        </p>
                        {/* Social Icon */}
                        <Social />
                    </div>

                    {/* links */}
                    <div tw="flex flex-col  space-y-4">
                        <span tw="text-2xl uppercase color[#f4003a] mb-4 md:mb-12 font-bold font-family[Bungee]">Important Links</span>
                        {footerdata.map((data, index) =>
                            <div tw="flex space-x-4 items-center" key={index}>
                                <img tw="w-4" src="/assets/images/arrow.svg" alt="" />
                                <a href={data.link} >
                                    <span tw="text-white text-base cursor-pointer"> {data.title} </span>
                                </a>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer
