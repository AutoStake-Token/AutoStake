import { useState } from "react"
import tw from "twin.macro"
function Card({ data }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div
            css={[
                tw`flex flex-col  space-y-4 text-center border-color[#3c5a3c] border-b-2`,
                expanded && tw` background-color[#] border-2`
            ]}
        >

            {/* top bar */}
            <div
                css={[
                    tw`flex items-center  justify-between px-4 py-3 `,
                    expanded && tw` background-color[#]`
                ]}>
                <div tw="flex w-full items-center space-x-4">
                    <span tw="color[#7fc17f] text-2xl" >[?]</span>
                    <h2 tw="text-xl lg:text-2xl text-left w-full font-bold color[#3c5a3c]">{data.question}</h2>
                </div>


                <div
                    css={[
                        tw`w-6 cursor-pointer fill-current color[#7fc17f] transform -rotate-45`,
                        expanded && tw` rotate-45`
                    ]}
                    onClick={() => setExpanded(!expanded)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </div>

            </div>

            {/* bottom para */}
            {expanded && <span tw="flex flex-col text-2xl py-10 px-4 font-medium  color[#7fc17f] ">
                {data.answer}
            </span>}

        </div >
    )
}

export default Card
