import tw from "twin.macro"
function Card({ data, index }) {
    const isEven = index % 2 == 0 ? true : false;

    return (
        <div tw="flex flex-1 w-full ">
            <div tw="flex-1">
                <div tw="flex flex-col px-4 border-l border-color[#7fc17f] text-3xl color[#7fc17f]">
                    <span>{data.year}</span>
                    <span tw="ml-12">{data.month} {data.year}</span>
                </div>
            </div>
            <div tw="flex-1 flex flex-col color[#3c5a3c] text-2xl md:text-3xl space-y-8">
                {data.events.map((item) =>
                    <span>{item}</span>
                )}
            </div>
        </div>
    )
}

export default Card
