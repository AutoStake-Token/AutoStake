import tw from 'twin.macro'
import { faqdata } from './faq.data'
import Card from './card'

function Faq() {
    return (
        <div tw="flex bg-cover min-h-screen  background-image[url('/assets/images/stars2.jpg')]">
            <div tw="flex flex-col flex-1 items-center space-y-12 justify-center bg-black bg-opacity-90 py-8 px-4 md:px-32">

                <h1 tw="text-4xl text-white uppercase text-center font-bold font-family[Bungee]">Frequently asked questions</h1>

                <div tw="flex flex-col space-y-8  justify-center md:p-6 py-8 w-full  md:w-3/4">
                    {faqdata.map((feature, index) =>
                        <Card data={feature} key={index} />
                    )}

                </div>
            </div>
        </div>
    )
}

export default Faq
