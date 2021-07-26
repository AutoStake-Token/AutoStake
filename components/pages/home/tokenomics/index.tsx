import tw from "twin.macro"
import Card from "./card"
import { tokenomicsdata } from "./tokenomics.data"

function Tokenemoics() {
    return (
        <div id="stats" tw=" lg:min-height-[100vh] z-20">
            <div tw="flex flex-1 xl:flex-row space-y-8 xl:space-y-0 flex-col items-center justify-between h-full w-full py-8 xl:px-12">
                <div tw="flex px-8 flex-col justify-center items-center space-y-8 lg:width[40%]">
                    <div>
                        <div tw="flex items-start">
                            <span tw="text-xl color[#7fc17f] mr-4 ">02</span>
                            <h2 className="text-glow" tw="color[#7fc17f] text-5xl lg:text-7xl mb-8 ">Token Statistics</h2>
                        </div>
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


            <div id="whitelist" tw="flex flex-col  items-center px-8 py-32 w-full ">
                <div tw="flex items-start">
                    <span tw="text-xl color[#7fc17f] mr-4 ">03</span>
                    <h2 className="text-glow" tw="color[#7fc17f] text-3xl lg:text-7xl  mb-20 "> Whitelist/Presale</h2>
                </div>
                <div tw="flex flex-col justify-center lg:(flex-row space-x-20 space-y-0) space-y-8 w-full">
                    <div tw=" lg:text-2xl text-lg flex flex-col space-y-2 color[#3c5a3c]">
                        <div tw="flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                tw="transform rotate-90 "
                            >
                                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                    <g stroke="#4481C6" strokeWidth="2" transform="translate(-725 -5658)">
                                        <g transform="rotate(-135 1545.634 2688.384)">
                                            <path d="M-1.13703805e-13 6.93959961L8.1932226 15.1328222 16.3864452 6.93959961"></path>
                                            <path d="M8.193 15.133L8.193 0"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span tw="text-2xl color[var(--blue)] text-center lg:text-3xl ">Shill whitelist: </span>
                        </div>
                        <span tw="text-3xl lg:text-5xl color[var(--blueDark)]"> 50,000,000 (5%)</span>
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
                        <div tw="flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                tw="transform rotate-90"
                            >
                                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                    <g stroke="#4481C6" strokeWidth="2" transform="translate(-725 -5658)">
                                        <g transform="rotate(-135 1545.634 2688.384)">
                                            <path d="M-1.13703805e-13 6.93959961L8.1932226 15.1328222 16.3864452 6.93959961"></path>
                                            <path d="M8.193 15.133L8.193 0"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span tw="text-2xl color[var(--blue)]  lg:text-3xl ">Presale: </span>
                        </div>
                        <span tw="text-3xl lg:text-5xl color[var(--blueDark)]"> 500,000,000 (50%)</span>
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
