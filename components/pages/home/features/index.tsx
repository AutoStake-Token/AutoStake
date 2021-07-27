import tw from 'twin.macro'
import { featuresdata } from './features.data'
import Feature from './feature'

function Features() {
    return (
        <div tw="relative" id="about">
            <div tw="flex flex-col items-center justify-center relative py-24 px-8">
                <div tw=" flex flex-row items-start justify-center mb-24  md:col-span-2 row-start-1 md:(col-start-2 row-start-1) text-4xl md:text-6xl">
                    <span tw="text-xl color[var(--green)] mr-4 ">01</span>
                    <span className="text-glow" tw="color[var(--green)] text-left md:text-center">Welcome to AutoStake</span>
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


