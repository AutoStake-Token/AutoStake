import tw from "twin.macro"

function Team({ data }) {
    return (
        <div className="box-glow" tw="flex space-y-8  flex-col items-center justify-center  height[410px] width[320px] relative border-2 border-color[var(--greenDark)] " >

            {/* profile image */}

            < div tw=" rounded-full h-44 w-44 background-color[var(--green)] overflow-hidden" >
                <img src={"/assets/images/team/" + data.picture + ".png"} alt="" />
            </div >

            <div tw="flex flex-col items-center space-y-4 ">
                <h2 className="text-glow" tw="text-3xl">{data.name.split(" ")[0]}</h2>
                <span tw="color[var(--greenDark)]" >{data.role}</span>

            </div>

        </div >

    )
}

export default Team
