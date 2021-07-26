import tw from "twin.macro"
import Link from "next/link"
import { footerdata, footerdataLinks } from "./footer.data"
import Social from "../social"

function Footer() {
    return (


        <div tw="flex flex-col items-center  h-full justify-center relative ">
            <div tw="h-1 width[95%] background-color[#7fc17f] my-8" ></div>
            <div tw="flex flex-col-reverse md:flex-row md:items-center justify-center py-8 space-y-12 md:space-y-0 md:space-x-24 px-8 md:px-24 h-full w-full ">
                <div tw=" flex flex-1 flex-col space-y-12 items-start pt-8">
                    <img tw="md:width[400px]" src="/assets/asred.svg" alt="" />
                    <div tw="flex flex-col md:flex-row color[#3c5a3c] text-lg">
                        <p tw="flex-1 text-center mb-8">Trading cryptocurrencies carries a high level of risk, and may not be suitable for all investors. Before deciding to trade cryptocurrency you should carefully consider your investment objectives, level of experience, and risk appetite.
                        </p>
                        <p tw="flex-1 text-center">You should be aware of all the risks associated with cryptocurrency trading. Please trade wisely!
                            <br /> -AutoStake Team
                        </p>
                    </div>
                </div>

                {/* links */}
                <div tw="flex flex-col lg:flex-row flex-1 ">
                    <div tw="flex flex-col space-y-4  mr-16 mb-8">
                        <span tw="text-7xl color[#7fc17f] mb-4 md:mb-12  " className="text-glow"> support </span>
                        <div tw="flex flex-col space-y-4 px-4 text-xl">
                            {footerdataLinks.map((data, index) =>
                                <a href={data.link} key={index}>
                                    <div tw="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 25 25"
                                            tw="transform  color[var(--green)] hover:color[var(--greenDark)]"
                                        >
                                            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1">
                                                <g stroke="currentColor" strokeWidth="2" transform="translate(-725 -5658)">
                                                    <g transform="rotate(-135 1545.634 2688.384)">
                                                        <path d="M-1.13703805e-13 6.93959961L8.1932226 15.1328222 16.3864452 6.93959961"></path>
                                                        <path d="M8.193 15.133L8.193 0"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <span tw="color[var(--green)] cursor-pointer font-bold hover:color[var(--greenDark)]"> {data.title} </span>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                    <div tw="flex flex-col space-y-4  ">
                        <span tw="text-7xl color[#7fc17f] mb-4 md:mb-12  " className="text-glow"> links</span>
                        <div tw="flex flex-col space-y-4 px-4 text-xl">
                            {footerdata.map((data, index) =>
                                <a href={data.link} key={index} >
                                    <span tw="color[#3c5a3c] cursor-pointer hover:color[#7fc17f]"> {data.title} </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Footer
