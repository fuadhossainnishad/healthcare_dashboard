"use client";

import { Navbars } from "./Navbars";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);

  const handleActive = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <main className="h-screen w-[20%] p-8 flex flex-col justify-center">
      <nav className="space-y-4 ">
        {Navbars.map((nav, index) => (
          <div key={index} className="">
            <button className="" onClick={() => setActive(index)}>
              {nav.name}
            </button>
            {active === index && (
              <div className="m-4">
                {nav.subnav.map((subitem, subindex) => (
                  <div key={index} className="">
                    {subitem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </main>
  );
}
