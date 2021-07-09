import tw from "twin.macro"

function Info({ address, setOpenPopup }) {
    return (
        <div className="gradient" tw=" relative flex w-full max-w-3xl h-3/4 flex-col py-4 items-center space-y-8 text-left bg-gray-900 text-white font-bold text-lg opacity-100 border-4 rounded-xl border-black " >
            <div>
                <span tw="text-4xl font-extrabold text-red-600 uppercase">Your Stats</span>
            </div>
            <div tw="flex items-start w-full px-4 flex-col space-y-6">
                <div tw="flex flex-col">
                    <span tw="text-2xl text-red-400">Address:</span>
                    <span tw="font-semibold text-gray-400"> 0x01278394765747893</span>
                </div>

                <div tw="flex flex-col">
                    <span tw="text-2xl text-red-400">Balance: </span>
                    <span tw="font-semibold text-gray-400"> 162527</span>
                </div>

                <div tw="flex flex-col">
                    <span tw="text-2xl text-red-400">Current Earnings:</span>
                    <span tw="font-semibold text-gray-400"> 18903248</span>
                </div>

                <div tw="flex flex-col">
                    <span tw="text-2xl text-red-400">Next Payout: </span>
                    <span tw="font-semibold text-gray-400"> In 4 days</span>
                </div>


            </div>
            <div tw="absolute flex items-center justify-center right-0 -top-8 border w-8 h-8  border-white leading-3  text-center cursor-pointer" onClick={() => setOpenPopup(false)} >
                X
            </div>
        </div>
    )
}

export default Info
