import tw from "twin.macro"
import { roadmapdata } from "./roadmap.data"
import Card from "./card"

function RoadMap() {
    return (
        <div tw="flex flex-col md:flex-row md:py-24 px-4">
            <div tw="flex items-start">
                <span tw="text-xl color[#7fc17f] mr-4 ">03</span>
                <h2 className="text-glow" tw="flex-1 color[#7fc17f] text-center  text-7xl  mb-24">Historic Timeline</h2>
            </div>
            <div tw="flex flex[2] flex-col space-y-32 items-center border-l-2 border-color[#3c5a3c] justify-center px-8 relative mb-8">
                {/* <div tw="hidden md:flex absolute margin-left[auto] w-1 z-index[0] h-3/4 background-color[#f4003a]"></div> */}
                {roadmapdata.map((item, index) =>
                    <Card data={item} index={index} key={index} />
                )}
            </div>
        </div>
    )
}

export default RoadMap
