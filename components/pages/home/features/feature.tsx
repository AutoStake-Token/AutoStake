import tw from "twin.macro"

function Feature({ data }) {
    return (
        <div className="box-glow" tw="flex flex-col border border-color[var(--greenDark)] items-center  space-y-8 text-center md:height[450px] w-80 px-8 py-12 ">
            <img tw="height[100px]" src={data.icon} alt="" />
            <h2 tw="text-2xl color[var(--green)]">{data.heading}</h2>
            <div>
                <span tw="text-sm color[var(--greenDark)] font-medium "> {data.details}</span>
            </div>
        </div>
    )
}

export default Feature

