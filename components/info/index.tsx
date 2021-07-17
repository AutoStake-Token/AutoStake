import { useEffect, useState } from "react"
import tw from "twin.macro"

function Info({ address, setOpenPopup }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [balance, setBalance] = useState(null)
    useEffect(() => {
        getBalance(address)
    }, [])

    async function getBalance(address) {
        const url = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=" + process.env.NEXT_PUBLIC_CONTRACT + "&address=" + address + "&tag=latest&apikey=" + process.env.NEXT_PUBLIC_API
        const res = await fetch(url)
        const data = await res.json()
        setBalance(data.result)
        if (data.status == 0) { setIsError(true) }
        setIsLoading(false)
    }
    const shortAdd = address.substr(0, 6) + "..." + address.substr(36, 41)
    return (
        <div className="gradient" tw=" relative flex w-full max-w-3xl h-3/4 flex-col py-4 items-center space-y-8 text-left bg-gray-900 text-white font-bold text-lg opacity-100 border-4 rounded-xl border-black " >
            <div>
                <span tw="text-4xl font-extrabold text-red-600 uppercase">Your Stats</span>
            </div>
            {isLoading ?
                <div>
                    Loading Your Balance
                </div>
                : isError ?
                    <div>Invalid address format</div>
                    : <div tw="flex items-start w-full px-4 flex-col space-y-6">
                        <div tw="flex flex-col">
                            <span tw="text-2xl text-red-400">Address:</span>
                            <span tw="font-semibold text-gray-400"> {shortAdd}</span>
                        </div>

                        <div tw="flex flex-col">
                            <span tw="text-2xl text-red-400">Balance: </span>
                            <span tw="font-semibold text-gray-400"> {balance}</span>
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
            }
            <div tw="absolute flex items-center justify-center right-0 -top-8 border w-8 h-8  border-white leading-3  text-center cursor-pointer" onClick={() => setOpenPopup(false)} >
                X
            </div>
        </div>
    )
}

export default Info
