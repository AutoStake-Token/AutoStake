import tw from "twin.macro"

function Card({ data }) {
    return (
        <div tw="flex border-l-4 border-color[#7fc17f]">
            {/* <div tw="w-1 h-full background-color[#7fc17f] mr-4"></div> */}
            <div tw="flex flex-col space-y-4 justify-between border-color[#7fc17f] uppercase text-3xl ml-4 ">
                <span tw="text-3xl color[#3c5a3c] tracking-wider items-baseline">{data.amount}</span>
                <span tw="text-2xl color[#7fc17f]">{data.figure}</span>
            </div>
        </div>
    )
}

export default Card
