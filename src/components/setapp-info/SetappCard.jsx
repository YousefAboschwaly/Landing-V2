import { Facebook, Instagram, Twitter } from "lucide-react";

const icons = [
  { icon: Twitter , color: "#1C95E0" },
  { icon: Instagram , color: "#E4009C" },
  { icon: Facebook , color: "#3B5998" },
];
export default function SetappCard({
  i,
  quote,
  name,
  handle,
  bgColor,
}) {
  const Icon = icons[i % icons.length].icon;

  return (
    <div
      className={` bg-[#F5F5F5] w-95 h-105.75 rounded-lg p-1.75 transition-opacity duration-300 space-y-[38.5px]`}
    >
      <div
        className={`px-5.5 py-9.75 w-91.5 h-75  rounded-lg ${bgColor} `}
      >
        <p className=" font-medium text-[26px] leading-[36.92px] ">{quote}</p>
      </div>

      <div className=" px-5">
        <p className="text-primary text-[18px] leading-[32.04px]">{name}</p>

        <div className="font-semibold flex justify-between ">
          <p className="text-[14px]  leading-6.25 text-[#9F9F9F] ">
            {handle}
          </p>
          <span className="w-5 h-5 tex-white">
            <Icon  fill={icons[i % icons.length].color} stroke="none" />
          </span>
        </div>
      </div>
    </div>
  );
}
