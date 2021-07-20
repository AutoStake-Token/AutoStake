import tw from 'twin.macro'
import { featuresdata } from './features.data'
import Feature from './feature'

function Features() {
    return (
        <div tw="relative" id="about">
            <div tw="flex flex-col items-center justify-center relative py-24 px-8">
                <div tw=" flex flex-col items-center justify-center mb-24  md:col-span-2 row-start-1 md:(col-start-2 row-start-1) text-4xl md:text-6xl">
                    <span className="text-glow" tw="text-center color[#7fc17f]">Welcome to AutoStake</span>
                </div>
                <div tw="  grid place-items-center justify-items-center md:grid-cols-2 xl:grid-cols-4 grid-cols-1  gap-8 ">
                    {featuresdata.map((feature, index) =>
                        // <div>Hello</div>
                        <Feature data={feature} key={index} />
                    )}

                </div>
            </div>
        </div>


    )
}

export default Features


