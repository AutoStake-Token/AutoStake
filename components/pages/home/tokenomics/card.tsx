import tw from "twin.macro"

function Card({ data }) {
    return (
        <div tw="flex border-l-4 border-color[var(--blue)]">
            {/* <div tw="w-1 h-full background-color[#7fc17f] mr-4"></div> */}
            <div tw="flex flex-col space-y-4 justify-between uppercase text-3xl ml-4 ">
                <span tw="text-3xl color[var(--blueDark)] tracking-wider items-baseline">{data.amount}</span>
                <span tw="text-2xl color[var(--blue)]">{data.figure}</span>
            </div>
        </div>
    )
}

export default Card
