import tw from "twin.macro"
import { roadmapdata } from "./roadmap.data"
import Card from "./card"

function RoadMap() {
    return (
        <div tw="py-24 background-color[#0d0c0c]">
            <h2 tw="text-white text-center  text-5xl font-extrabold uppercase mb-8 font-family[Bungee]">Historic <span tw="color[#f4003a]">Timeline</span></h2>

            <div tw="flex flex-col space-y-12 items-center justify-center p-6 relative">
                {/* <div tw="hidden md:flex absolute margin-left[auto] w-1 z-index[0] h-3/4 background-color[#f4003a]"></div> */}
                {roadmapdata.map((item, index) =>
                    <Card data={item} index={index} key={index} />
                )}
            </div>
        </div>
    )
}

export default RoadMap
