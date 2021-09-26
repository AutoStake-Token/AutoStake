import tw from "twin.macro";
import { featuresdata } from "./features.data";
import Feature from "./feature";

function Features() {
  return (
    <div tw="relative" id="about">
      <div tw="flex flex-col items-center justify-center relative py-24 px-8">
        <div tw=" flex flex-row items-start justify-center mb-24  md:col-span-2 row-start-1 md:(col-start-2 row-start-1) text-4xl md:text-6xl">
          <span tw="text-xl color[var(--green)] mr-4 ">01</span>
          <span
            className="text-glow"
            tw="color[var(--green)] text-left md:text-center"
          >
            Welcome to AutoStake
          </span>
        </div>
        <div tw="  grid place-items-center justify-items-center md:grid-cols-2 xl:grid-cols-4 grid-cols-1  gap-8 ">
          {featuresdata.map((feature, index) => (
            // <div>Hello</div>
            <Feature data={feature} key={index} />
          ))}
        </div>

        {/* Tokenomics */}
        <div
          id="roadmap"
          tw="flex flex-col items-center justify-center py-24 color[var(--redDark)]"
        >
          <h2 tw="text-6xl color[var(--green)]">Tokenomics</h2>

          <div tw="flex flex-col items-center justify-start mt-16 mb-8">
            <span tw="text-4xl">1,000,000,000,000,000</span>
            <span tw="uppercase ml-6 text-2xl">
              Starting supply pre “ReBase”
            </span>
          </div>
          <div tw="grid grid-cols-1">
            <div tw="flex items-center justify-start">
              <span tw="text-4xl">5%</span>
              <span tw="uppercase ml-6 text-2xl">Marketing</span>
            </div>
            <div tw="flex items-center justify-start">
              <span tw="text-4xl">5%</span>
              <span tw="uppercase ml-6 text-2xl">Buyback</span>
            </div>
            <div tw="flex items-center justify-start">
              <span tw="text-4xl">5%</span>
              <span tw="uppercase ml-6 text-2xl">Liquidity</span>
            </div>
          </div>

          <div tw="flex items-center mt-8">
            <span tw="text-4xl">35%</span>
            <span tw="uppercase ml-6 text-2xl">
              of the supply locked from private sale.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
