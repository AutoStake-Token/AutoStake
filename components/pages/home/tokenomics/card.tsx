import tw from "twin.macro"

function Card({ data }) {
    return (
        <div className="cardgradient" tw="flex flex-col items-center justify-center space-y-8 uppercase w-80 h-60 rounded-lg text-3xl text-white">
            <span tw="text-3xl font-bold tracking-wider font-family[Bungee]">{data.amount}</span>
            <span tw="text-xl font-extrabold">{data.figure}</span>
        </div>
    )
}

export default Card
