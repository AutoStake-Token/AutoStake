import tw from 'twin.macro'
import { teamsdata } from './team.data'
import Card from './card'

function Team() {
    return (
        <div tw="relative">
            <div className="ellips"></div>
            <div tw="flex  flex-col h-full items-center justify-between relative background-color[#121111] py-12 md:py-32">
                <span tw="text-4xl md:text-5xl px-2 uppercase font-bold text-white font-family[Bungee] mb-36">Team member</span>

                <div tw="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1  gap-8 ">
                    {teamsdata.map((data, index) =>
                        <Card key={index} data={data} />
                    )}
                </div>

            </div>
        </div>
    )
}

export default Team
