import tw from "twin.macro"

function Feature({ data }) {
    return (
        <div className="gradient" tw="flex flex-col items-center justify-evenly space-y-6 text-center md:height[450px] w-80 px-8 py-6 bg-black ">
            <img tw="height[150px]" src={data.icon} alt="" />
            <div>
                <h2 tw="text-2xl font-bold color[#f4003a] uppercase mb-6 font-family[Bungee]">{data.heading}</h2>
                <span tw="text-sm font-medium color[#676767]"> {data.details}</span>
            </div>
        </div>
    )
}

export default Feature

