import tw from 'twin.macro'
import { teamsdata } from './team.data'
import Card from './card'

function Team() {
    return (
        <div tw="relative" id="team">
            <div tw="flex  flex-col h-full items-center justify-between relative color[var(--green)]  py-24 px-4">
                <div tw="flex items-start">
                    <span tw="text-xl color[var(--green)] mr-4 ">06</span>
                    <span className="text-glow" tw="text-4xl  md:text-7xl px-2 mb-24">Team members</span>
                </div>

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
