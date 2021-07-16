import tw from "twin.macro"
function Card({ data, index }) {
    const isEven = index % 2 == 0 ? true : false;

    return (
        <div tw="z-index[1] w-full font-family[Bungee]">
            {isEven ?
                // right align
                <div tw="flex md:margin-left[40%] items-center" >
                    <div tw="flex md:(w-24 h-24) w-16 h-16 items-center justify-center relative">
                        <img css={[tw`transform rotate-180 absolute inset-0 z-0`, index == 0 && tw`transform[rotate(145deg)]`]} src="/assets/images/ellipse.png" alt="" />
                        <span tw="text-sm text-white z-10 font-bold color[#f4003a]">{data.year}</span>

                    </div>
                    <div tw="flex flex-col space-y-2 px-1 ">
                        < h2 tw="text-xl uppercase font-bold color[#f4003a]" >{data.month} {data.year}</h2 >
                        <span tw="text-sm md:text-2xl whitespace-nowrap font-extrabold text-white">{data.event}</span>
                    </div >
                </div> :
                // left align
                <div tw="flex items-center justify-end md:margin-right[40%]" >

                    <div tw="flex flex-col items-end space-y-2 px-1 ">
                        < h2 tw="text-xl uppercase font-bold color[#f4003a]" >{data.month} {data.year}</h2 >
                        <span tw="text-sm md:text-2xl font-extrabold text-white">{data.event}</span>
                    </div >
                    <div tw="flex md:(w-24 h-24) w-16 h-16 items-center justify-center relative">
                        <img tw=" absolute inset-0 z-0" src="/assets/images/ellipse.png" alt="" />
                        <span tw="text-sm text-white z-10 font-bold color[#f4003a]">{data.year}</span>

                    </div>
                </div>
            }
        </div>
    )
}

export default Card
