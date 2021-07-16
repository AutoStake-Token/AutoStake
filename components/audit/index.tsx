import tw from "twin.macro"

function Audit({ setOpenPopup }) {
    return (
        <div className="gradient" tw=" relative flex max-h-full py-2  px-4 max-w-xl flex-col items-center space-y-8 text-left bg-gray-900 text-white font-bold text-lg opacity-100 border-4 rounded-xl border-black " >
            <div tw="flex flex-col items-center">
                {/* <span tw="text-2xl lg:text-4xl font-extrabold text-red-600 uppercase">Techrate Audit</span> */}
                <div tw=" h-full flex flex-col items-center ">
                    <img tw="relative width[90%] h-auto bg-contain" src="/assets/AutoStakeAudit.jpg" alt="" />
                </div>

            </div>
            <div tw="absolute flex items-center justify-center right-0 -top-8 border-2 w-8 h-8 text-red-900  border-red-600 leading-3  text-center cursor-pointer" onClick={() => setOpenPopup(false)} >
                X
            </div>
        </div>
    )
}

export default Audit
