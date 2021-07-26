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
                    <span tw="color[var(--red)] text-2xl" >[?]</span>
                    <h2 tw="text-xl lg:text-2xl text-left w-full font-bold color[var(--redDark)]">{data.question}</h2>
                </div>


                <div
                    css={[
                        tw`w-6 cursor-pointer fill-current color[#7fc17f] transform -rotate-180`,
                        expanded && tw` -rotate-90`
                    ]}
                    onClick={() => setExpanded(!expanded)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                    >
                        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                            <g stroke="#7FC17F" strokeWidth="2" transform="translate(-725 -5658)">
                                <g transform="rotate(-135 1545.634 2688.384)">
                                    <path d="M-1.13703805e-13 6.93959961L8.1932226 15.1328222 16.3864452 6.93959961"></path>
                                    <path d="M8.193 15.133L8.193 0"></path>
                                </g>
                            </g>
                        </g>
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
