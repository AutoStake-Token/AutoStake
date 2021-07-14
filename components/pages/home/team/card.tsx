import tw from "twin.macro"

function Team({ data }) {
    return (
        <div className="gradient" tw="flex  flex-col items-center justify-end mb-32  height[250px] width[300px] relative ">

            {/* profile image */}
            <div tw="absolute top[-35%] border-radius[150px 150px 0 0] h-24 w-44 overflow-hidden box-shadow[-1px 1px 50px -1px rgba(244,0,58,0.75)]"></div>
            <div tw="absolute top[-35%] rounded-full h-44 w-44 overflow-hidden">
                <img src={"/assets/images/team/" + data.picture + ".jpg"} alt="" />
            </div>

            <div tw="flex flex-col items-center space-y-4 py-4 w-full">
                <h2 tw="text-2xl color[#f4003a] font-bold uppercase font-family[Bungee]">{data.name}</h2>
                <div tw="height[0.6px] opacity-20 bg-gray-400 w-full"></div>
                <div tw="text-white flex flex-col items-center text-sm">
                    <span >{data.role}</span>
                    <span>{data.email}</span>
                </div>
            </div>
            <div tw="h-5 w-full absolute bottom-0 overflow-hidden">
                <div tw="relative flex items-center justify-center h-full w-full">
                    <div className="ellipsbottom"> </div>
                </div>
            </div>
        </div>

    )
}

export default Team
