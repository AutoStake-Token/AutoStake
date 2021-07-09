import tw from "twin.macro"

function Popup({ children, toggle, setToggle }) {
    return toggle ? (
        <div tw=" flex items-center justify-center background-color[rgba(0, 0, 0, 0.3)] height[100%] inset-0 z-30 width[100%] fixed overflow-hidden">
            <div tw="flex relative items-center justify-center w-full h-full px-4">

                {children}
            </div>
        </div>
    ) : <></>
}

export default Popup
