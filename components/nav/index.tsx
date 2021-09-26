import tw from "twin.macro";

import Link from "next/link";
import { useRouter } from "next/router";

import { navdata } from "./nav.data";
import Social from "../social";
import link from "next/link";

function Nav() {
  const router = useRouter();
  return (
    <div tw=" md:flex z-30 flex-col md:flex-row items-center justify-between px-8 md:px-12 py-6 absolute w-full h-24">
      <div tw="flex-1">
        <Link href="/">
          <img
            tw=" md:(width[200px] h-20 static) cursor-pointer"
            src="/assets/images/ReBased-Main.svg"
            alt=""
          />
        </Link>
      </div>
      <div tw="xl:flex items-center justify-around  flex[3]  hidden  ">
        {navdata.map((data, index) => (
          <a key={index} href={data.link}>
            <span
              css={[
                tw`text-lg uppercase font-semibold color[var(--greenDark)] cursor-pointer`,
                router.asPath == data.link && tw`color[var(--green)]`,
              ]}
            >
              {data.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Nav;
