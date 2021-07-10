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
                        <p tw="text-white text-sm text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum earum nihil voluptatum nemo officiis ea doloribus a commodi vel numquam quod eligendi, cumque obcaecati distinctio atque. Quibusdam doloremque optio deserunt veritatis id. Culpa, libero odio iste blanditiis voluptas necessitatibus corporis.</p>
                        {/* Social Icon */}
                        <Social />
                    </div>

                    {/* links */}
                    <div tw="flex flex-col  space-y-4">
                        <span tw="text-2xl uppercase color[#f4003a] mb-4 md:mb-12 font-bold font-family[Bungee]">Important Links</span>
                        {footerdata.map((data, index) =>
                            <div tw="flex space-x-4 items-center" key={index}>
                                <img tw="w-4" src="/assets/images/arrow.svg" alt="" />
                                <Link href={data.link} >
                                    <span tw="text-white text-base cursor-pointer"> {data.title} </span>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer
