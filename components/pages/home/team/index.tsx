import tw from 'twin.macro'
import { teamsdata } from './team.data'
import Card from './card'

function Team() {
    return (
        <div tw="relative" id="team">
            <div tw="flex  flex-col h-full items-center justify-between relative color[#7fc17f]  py-24">
                <span className="text-glow" tw="text-6xl text-center md:text-7xl px-2 mb-24">Team members</span>

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
