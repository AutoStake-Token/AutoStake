import tw from "twin.macro";

function Feature({ data }) {
  return (
    <div
      className="box-glow"
      tw="flex flex-col border border-color[var(--greenDark)] items-center  space-y-2 text-center md:height[450px] w-80 px-8 py-4 "
    >
      <img tw="height[80px]" src={data.icon} alt="" />
      <h2 tw="text-2xl color[var(--green)]">{data.heading}</h2>
      <div>
        <span tw="font-size[14px] color[var(--greenDark)]  font-medium line-height[-12px]">
          {data.details}
        </span>
      </div>
    </div>
  );
}

export default Feature;
