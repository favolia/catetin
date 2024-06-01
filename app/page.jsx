"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [contentEditable, setContentEditable] = useState(false);
  const [catetinName, setCatetinName] = useState()

  useEffect(() => {
    const defaultName = JSON.parse(localStorage.getItem("catetinName"))
    if (!defaultName) {
      return setCatetinName("Catetin")
    }
    setCatetinName(prev => defaultName)
  }, []);

  const handleBlur = () => {
    setContentEditable(false);
  };

  return (
    <main className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(/images/wallpaper.jpg)]">
      <div className="w-full h-full px-3 py-4">
        <div
          data-tooltip-id="my-tooltip"
          title="Catetin App"
          className="select-none w-16 min-h-16 sm:w-20 sm:min-h-20 overflow-hidden truncate cursor-pointer hover:border border-blue-500 hover:bg-blue-800/35 active:bg-blue-300/35 flex flex-col gap-y-1 sm:gap-y-2 justify-center items-center"
        >
          <div className="w-7 sm:w-11">
            <Image src={"/images/catetin-logo-app.png"} width={100} height={100} quality={100} priority alt="Catetin logo" />
          </div>
          <div
            contentEditable={contentEditable}
            onBlur={handleBlur}
            onClick={() => setContentEditable(true)}
            className="outline-none truncate text-white text-[0.60rem] sm:text-xs text-wrap w-16 sm:w-20 text-center"
            suppressContentEditableWarning={true}
            onInput={e => localStorage.setItem("catetinName", JSON.stringify(e.currentTarget.textContent))}
          >
            <p className={`${!contentEditable && "truncate"} outline-none`}>{catetinName}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
