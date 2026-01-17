import Sticker from "./Sticker";

export function HeaderContent() {
  return (
    <section className="  py-16 md:py-24 lg:py-32">
      <div className=" relative overflow-hidden  flex items-center justify-center gap-14 w-full h-[595.59px]">
        <div className="hidden lg:block pt-36">
          {/* WORK WITH PICS - top left */}
          <Sticker
            id="pics"
            src="/images/pics.svg"
            alt="Work with pics"
            className={""}
          />

          {/* PDF/VPN/AD BLOCKER circle - left center */}
          <Sticker
            id="pdf"
            src="/images/pdf.svg"
            alt="PDF VPN Ad Blocker"
            className="-translate-y-14 translate-x-28"
          />

          {/* Macpaw Apps - */}
          <Sticker
            id="macpaw"
            src="/images/macpaw.svg"
            alt="Macpaw Apps"
            className="-translate-y-46 "
          />

          {/* BOOST TEAMWORK - left middle */}
          <Sticker
            id="teamwork"
            src="/images/teamwork.svg"
            alt="Boost teamwork"
            className="-translate-y-20 "
          />

          {/* STAY SECURE - bottom left */}
          <Sticker
            id="secure"
            src="/images/secure.svg"
            alt="Stay secure"
            className="-translate-y-28.5"
          />
        </div>

        {/* Center Content */}
        <div className=" flex gap-12 w-170 flex-col items-center text-center ">
          <div className=" flex h-[127.81px] w-[127.81px] items-center justify-center rounded-3xl bg-black ">
            <img
              src="/Frame.svg"
              alt="Setapp Logo"
              className="w-15 h-[93.44px]"
            />
          </div>

          <h1 className=" text-[50px]  md:text-[64px] font-bold leading-[67.84px] tracking-[1px] w-141.75 h-51 ">
            Dozens of apps.
            <br />
            One subscription.
            <br />
            $9.99
          </h1>

          <div className="flex items-center justify-center gap-5 ">
            <button className="py-3.5 px-7.75  rounded-md bg-white hover:bg-gray-100 transition-colors text-primary">
              Try free for 7 days
            </button>

            <div className="flex  gap-3">
              <button className="px-3.75 py-2.5 rounded-md bg-white hover:bg-gray-100 transition-colors">
                <img src="/images/apple.svg" alt="apple icon" />
              </button>{" "}
              <button className="px-3.75 py-2.5 rounded-md bg-white hover:bg-gray-100 transition-colors ">
                <img src="/images/google.svg" alt="google icon" />
              </button>
            </div>
          </div>

          {/* Tagline */}
          <p className="w-[320px] text-[16px] leading-[32.04px] font-normal ">
            Power up your workflow with Setapp, a smart way to get apps.
          </p>
        </div>

        {/* FIX WIFI - top right */}
        <div className="hidden lg:block pt-62">
          <Sticker
            id="wifi"
            src="/images/wifi.svg"
            alt="Fix WiFi"
            className="translate-x-10"
          />

          {/* PLAN YOUR DAY - right top */}
          <Sticker
            id="plan"
            src="/images/plan.svg"
            alt="Plan your day"
            className="-translate-y-17 -translate-x-16"
          />

          {/* CONVERT HEIC TO JPG - gear shape right */}
          <Sticker
            id="converter"
            src="/images/converter.svg"
            alt="Convert HEIC to JPG"
            className="-translate-y-31 translate-x-24 z-10 relative"
          />

          {/* MANAGE YOUR MAC - right middle */}
          <Sticker
            id="manage"
            src="/images/manage.svg"
            alt="Manage your Mac"
            className=" -translate-y-44 -translate-x-10 z-0 relative"
          />

          {/* MANAGE YOUR CODE - right middle */}
          <Sticker
            id="manage"
            src="/images/code.svg"
            alt="Manage your Code"
            className=" -translate-y-50 translate-x-5 "
          />
        </div>
      </div>
    </section>
  );
}
