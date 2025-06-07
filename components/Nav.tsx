import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Nav = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="flex flex-row items-center justify-between w-full h-16 px-4">
      <Link href="/" className="flex items-center">
        <img
          src="./images/gennit.svg"
          alt="Logo"
          width="28"
          height="28"
          className="h-7 w-7"
        />
      </Link>
      <div className="border-t border-white/10">
        <Button
          size="sm"
          className="w-full bg-white text-black hover:bg-gray-100 rounded-xl h-10 text-sm font-semibold transition-all duration-300"
          data-cal-namespace="30min"
          data-cal-link="klipto-ng-5ied8w/30min"
          data-cal-config='{"layout":"month_view"}'
        >
          Book Demo
        </Button>
      </div>
    </div>
  );
};

export default Nav;
