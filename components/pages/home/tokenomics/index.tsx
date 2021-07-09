import tw from "twin.macro"
import Card from "./card"
import { tokenomicsdata } from "./tokenomics.data"

function Tokenemoics() {
    return (
        <div tw=" lg:min-height-[100vh]  background-image[url('/assets/images/stars.png')]">
            <div tw="flex xl:flex-row space-y-8 xl:space-y-0 flex-col items-center justify-between h-full w-full bg-black bg-opacity-90 py-8 xl:px-12">
                <div tw="flex px-8 flex-col text-center justify-center items-center space-y-8 lg:width[40%]">
                    <div>
                        <h2 tw="text-white text-5xl font-extrabold uppercase mb-8 font-family[Bungee]">Token <span tw="color[#f4003a]">Statistics</span></h2>
                        <p tw="text-gray-400 text-sm tracking-widest "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad voluptatem temporibus natus quisquam! Voluptates non eum, molestiae rerum numquam quos ipsa repudiandae nam sed voluptate placeat praesentium omnis amet, asperiores odit. Expedita fuga saepe tenetur soluta exercitationem ut adipisci molestias?</p>
                    </div>

                    <div tw="flex md:w-full items-center justify-center flex-col ">
                        <div tw=" background-color[#f4003a] text-white text-xl font-semibold rounded-full px-2 md:px-6  py-2">
                            Learn More
                        </div>
                    </div>

                </div>
                <div tw="flex  xl:width[60%] justify-center items-end">
                    <div tw="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {tokenomicsdata.map((data, index) =>
                            <Card data={data} key={index} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenemoics