import tw from "twin.macro"
import Card from "./card"
import { tokenomicsdata } from "./tokenomics.data"

function Tokenemoics() {
    return (
        <div id="stats" tw=" lg:min-height-[100vh] ">
            <div tw="flex flex-1 xl:flex-row space-y-8 xl:space-y-0 flex-col items-center justify-between h-full w-full py-8 xl:px-12">
                <div tw="flex px-8 flex-col justify-center items-center space-y-8 lg:width[40%]">
                    <div>
                        <h2 className="text-glow" tw="color[#7fc17f] text-5xl lg:text-7xl mb-8 ">Token Statistics</h2>
                        <div tw="flex flex-col space-y-4 space-x-0 md:(flex-row space-x-8 space-y-0) color[#3c5a3c] ">
                            <p tw=" text-sm tracking-widest "> AutoStake is not a deflationary BSC token. It is a novel utility token and investment vehicle. Unlike HODL Token and other famous BSC projects which offer addtional BNB rewards to holders by essentially rugging their own LP and redistributing it, AutoStake takes the taxes collected and invests them into a PancakeSwap Syrup pool. </p>
                            <p tw=" text-sm tracking-widest "> The advantage is that while HODL Tokenomics will death spiral when volume is low (causing rewards to be low, lowering incentive to hold), the AutoStake pools will continue to provide rewards regardless of volume, and will always continue to grow and offer ever higher returns on investment (ROIs) for holders. We welcome you to the next generation of tokenomics.</p>
                        </div>
                    </div>

                    <div tw="flex md:w-full items-start  flex-col ">
                        <div className="text-glow box-glow" tw=" border border-color[#7fc17f]  color[#7fc17f]  text-3xl px-2 md:px-6  py-4">
                            <a href="https://bscscan.com/address/0x84925E218604F238fc092baf7BB2AaE8124Ed13C">
                                View Contract
                            </a>
                        </div>
                    </div>

                </div>
                <div tw="flex flex-1  justify-center items-end">
                    <div tw="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {tokenomicsdata.map((data, index) =>
                            <Card data={data} key={index} />
                        )}
                    </div>
                </div>
            </div>


            <div id="whitelist" tw="flex flex-col  items-center px-8 py-32 w-full bg-black bg-opacity-90 ">
                <h2 className="text-glow" tw="color[#7fc17f] text-3xl lg:text-7xl  mb-20 "> Whitelist/Presale</h2>
                <div tw="flex flex-col justify-center lg:(flex-row space-x-20 space-y-0) space-y-8 w-full">
                    <div tw=" lg:text-2xl text-lg flex flex-col space-y-2 color[#3c5a3c]">
                        <div tw="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" tw="color[#7fc17f] mt-1 h-8 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span tw="text-2xl color[#7fc17f] mb-3 lg:text-3xl font-bold">Shill whitelist: </span>
                        </div>
                        <span tw="text-3xl lg:text-5xl"> 50,000,000 (5%)</span>
                        <div tw="flex flex-col space-y-4">
                            <span tw="text-2xl block">
                                ⁃ 1 BNB = 500,000 AutoStake
                            </span>
                            <span tw=" text-2xl block">
                                ⁃ Min 50 spots (2 BNB)
                            </span>
                        </div>
                    </div>

                    <div tw="text-white lg:text-2xl text-lg flex flex-col  space-y-2 color[#3c5a3c]">
                        <div tw="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" tw="color[#7fc17f] mt-1 h-8 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span tw="text-2xl color[#7fc17f] mb-3 lg:text-3xl font-bold">Presale: </span>
                        </div>
                        <span tw="text-3xl lg:text-5xl"> 500,000,000 (50%)</span>
                        <div tw="flex flex-col space-y-4">
                            <span tw="text-2xl">
                                ⁃ 1 BNB = 500,000 AutoStake
                            </span>
                            <span tw="text-2xl ">
                                ⁃ SC / HC: 500 BNB / 1000 BNB
                            </span>
                            <span tw="text-2xl">
                                ⁃ LP 60% / Staking 35% / Marketing (Team) 5%
                            </span>
                            <span tw="text-2xl">
                                ⁃ Min/max buy: 0.1 BNB / 2 BNB
                            </span>
                        </div>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Tokenemoics
