export default function Setapp() {
  return (
    <div className="setapp container mx-auto px-6 py-12 md:w-300 md:py-25.25 md:px-0 mt-10  border-y border-white border-x-0 space-y-11 md:space-y-22  ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8  ">
        <h2>What you get on Setapp.</h2>
        <p className=" md:w-150 md:pr-8.75">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        {/* Top large card */}

        <div className="md:col-span-2 rounded-[20px] overflow-hidden bg-[#DF96AE] group transition-all duration-500 hover:shadow-2xl md:pt-15 ">
          <div className=" flex flex-col md:flex-row items-center  p-5  md:px-15 gap-5 md:gap-8">
            <img src="/icon-cmm.svg" alt="laptop icon " />
            <div className=" text-primary">
              <h3>Keep your Mac clean</h3>
              <p>Remove junk, scan for malware, wipe email attachments</p>
            </div>
          </div>
          <img
            src="/cmm-big@2x.png.png"
            alt="smart-screen"
            className="px-8 pb-0 md:px-9.25 w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Bottom left card */}
        <div className="rounded-[20px] overflow-hidden bg-[#F4F0E4] group hover:shadow-xl transition-all duration-500 flex flex-col pb-8  md:pb-[59.54px] ">
          <div className="flex-1">
            <img
              src="/coderunner@2x.png.png"
              alt="code image"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="px-8 md:px-15 space-y-4.75 text-primary">
            <img src="/icon-coderunner.svg" alt="code icon" />

            <div>
              <h3>Write code</h3>
              <p>Create applications in more than 25 languages</p>
            </div>
          </div>
        </div>

        {/* Bottom right card */}
        <div className="rounded-[20px] overflow-hidden bg-[#384C75] pt-8 md:pt-15 group hover:shadow-xl transition-all duration-500 flex flex-col space-y-6 md:space-y-[52.46px]">
          <div className="px-6 md:px-15 space-y-2 md:space-y-4.75 ">
            <img src="/icon-meeter.svg" alt="meeter icon" />

            <div>
              <h3>Join meetings in a click</h3>
              <p>Quickly access links to your meetings from menu bar</p>
            </div>
          </div>

          <img src="/meeter@2x.png.png" alt="meeter image "  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"  />
        </div>
      </div>

      <button className="flex items-center justify-center gap-2.75 mx-auto">
        <img src="/arrow-right-icon.svg" alt="arrow-right" />
        <span className="font-medium text-[20px] leading-7.5  tracking-[1.6px]">
          {" "}
          View all superpowers
        </span>
      </button>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-5 md:gap-8 w-full  ">
        <h2 className=" ">Your Setapp journey.</h2>
        <p className="md:w-150 md:pr-8.75">
          Type in your task into Setapp search and get instant app
          recommendations.
        </p>
      </div>
    </div>
  );
}
