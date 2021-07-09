import { useState } from "react"
import tw from "twin.macro"
function Card({ data }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div tw="flex flex-col space-y-4 text-center background-color[#232222] ">

            {/* top bar */}
            <div
                css={[
                    tw`flex items-center  justify-between px-4 py-3 background-color[#232222]`,
                    expanded && tw` background-color[#f4003a]`
                ]}>
                <div tw="flex w-full items-center space-x-4">
                    {expanded ? <div tw="w-6 fill-current text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div> :
                        <div tw="w-6 fill-current color[#f4003a]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                        </div>}
                    <h2 tw="text-lg text-left w-full font-bold text-white">{data.question}</h2>
                </div>

                {!expanded ?
                    <div tw="w-6 fill-current color[#f4003a]" onClick={() => setExpanded(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div> :

                    <div tw="w-6 fill-current text-white" onClick={() => setExpanded(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                }
            </div>

            {/* bottom para */}
            {expanded && <span tw=" py-10 px-4 font-medium text-gray-400">
                {data.answer}
            </span>}

        </div >
    )
}

export default Card
