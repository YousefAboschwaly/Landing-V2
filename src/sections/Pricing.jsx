import React from "react";

export default function PricingCard() {
  return (
    <div className="  bg-linear-to-b from-[#fefefe] from-0% via-[#fefefe] via-50% to-[#2B2D32] to-50%  ">
      <div className="rounded-[20px]  min-h-125 md:h-147 px-8 mx-6 md:mx-14  md:px-19 py-12 md:pt-30 md:pb-23 bg-[#F5F5F5] text-primary flex flex-col justify-center shadow-sm">
        <div className="mb-6 md:mb-10">
          <img
            src="/setapp-logo.svg"
            alt="Setapp Logo"
            className="w-12 h-12 md:w-auto md:h-auto"
          />
        </div>
          <h2 className="font-['Avenir_Next-DemiBold',Helvetica] font-bold text-primary text-4xl md:text-[46px] tracking-tight leading-tight mb-12">
            Superpowers starting $9.99/month.
            <br />
            Free for 7 days.
          </h2>

        <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="h-14 px-10 bg-primary text-white rounded-md hover:bg-primary/90 text-lg font-medium">
              Get started now
            </button>

            <button
              variant="outline"
              className="h-14 px-10 rounded-md border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white text-lg font-medium transition-all"
            >
              More about Setapp
            </button>
          </div>
      </div>
    </div>
  );
}
