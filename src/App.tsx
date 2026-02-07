"use client";
import { useState } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Orappano?",
      "Onnoode aalochikk",
      "Ath nthaa anganee",
      "Dairy milk vangi theram",
      "GRAAAHAHHHHA",
      "Nthann nee ingane",
      "But :*(",
      "Myrr marikkar aayi",
      "	Chath chath chath",
      "Onnoodee aalojicho neey",
      "Pha poliyadi yes njekk",
      ":((((",
      "Ith inn onnum theeroola",
      "Valentine aavoola enn orapicho??",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src={img2} />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!!Nandhi und my pookiee❤️❤️❤️❤️❤️!!🫦🫦🫦 ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={img1} />
          <h1 className="my-4 text-4xl">Ente Valentine aakuo nee😭😭😭???</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
