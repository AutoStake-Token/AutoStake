import tw from "twin.macro"

import Link from "next/link"
import { useRouter } from 'next/router'

import { navdata } from "./nav.data"
import Social from "../social"

function Nav() {
    const router = useRouter()
    return (
        <div tw=" md:flex z-30 flex-col md:flex-row items-center justify-between px-8 md:px-24 py-6 absolute w-full h-24">
            <img tw=" md:(width[200px] h-20 static)" src="/assets/images/autostake_light.svg" alt="" />
            <div tw="xl:flex items-center justify-around  flex-1  hidden px-32 ">
                {navdata.map((data, index) =>
                    <Link key={index} href={data.link} >
                        <span css={[
                            tw`text-lg uppercase font-semibold text-white cursor-pointer`,
                            router.asPath == data.link && tw`color[#f4003a]`
                        ]}>
                            {data.title}
                        </span>
                    </Link>
                )}
            </div>
            <div tw="hidden md:flex">
                <Social />
            </div>
        </div>
    )
}

export default Nav
