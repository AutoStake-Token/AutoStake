import tw from "twin.macro"

function Card({ data }) {
    return (
        <div className="cardgradient" tw="flex flex-col items-center justify-center uppercase w-80 h-60 rounded-lg text-3xl text-white font-family[Bungee]">
            <span tw="text-2xl font-semibold text-gray-400 tracking-wider font-family[Bungee] mb-2">{data.amount}</span>
            <span tw="text-2xl font-extrabold mb-12">{data.figure}</span>
            <span tw="text-2xl font-semibold text-gray-400 tracking-wider mb-2 ">{data.amount2}</span>
            <span tw="text-2xl font-extrabold">{data.figure2}</span>
        </div>
    )
}

export default Card
