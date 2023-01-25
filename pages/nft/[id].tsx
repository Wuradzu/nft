import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const NFTDropPage = () => {
  const address = useAddress();
  console.log(address)
  return (
    <div className="flex flex-col h-screen lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src="https://links.papareact.com/8sg"
              alt=""
              className="w-44 object-cover rounded-xl lg:h-96 lg:w-72"
            />
          </div>

          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-white">PAPAFAM Apes</h1>
            <h2 className="text-xl text-gray-300 ">
              A collection of PAPAFAM Apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              PAPAFAM
            </span>{" "}
            NFT Market Place
          </h1>
          <div>
            <ConnectWallet />
          </div>
        </header>

        <hr className="my-2 border" />

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            alt=""
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The PAPAFAM Ape Coding Club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>
        {/* Mint Button */}
        <button className="h-16 bg-red-600 w-full text-white rounded-full mt-4 font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
