import React, { useContext } from "react";

import { Button } from "components/ui/Button";
import { Context } from "../lib/Provider";
import { metamaskIcon } from "./WalletIcons";

export const Connect: React.FC = () => {
  const { authService } = useContext(Context);

  return (
    <div className="px-4">
      <p className="text-xs text-white mt-2 mb-3 text-center italic">
        Connect your Web3 wallet to play
      </p>
      <Button
        className="mb-2 py-2 text-sm relative"
        onClick={() => authService.send("CONNECT")}
      >
        <div className="px-8">
          {metamaskIcon}
          Metamask
        </div>
      </Button>
      {/* <Button className="mb-2 py-2 text-sm relative " disabled>
        <div className="px-8">
          <svg
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1024 1024"
            overflow="visible"
            className="w-7 h-7 mobile:w-6 mobile:h-6  ml-2 mr-6 absolute left-0 top-1"
          >
            <path
              fill="#0052FF"
              d="M512,0L512,0c282.8,0,512,229.2,512,512l0,0c0,282.8-229.2,512-512,512l0,0C229.2,1024,0,794.8,0,512l0,0 C0,229.2,229.2,0,512,0z"
            ></path>
            <path
              fill="#FFFFFF"
              d="M512.1,692c-99.4,0-180-80.5-180-180s80.6-180,180-180c89.1,0,163.1,65,177.3,150h181.3 c-15.3-184.8-170-330-358.7-330c-198.8,0-360,161.2-360,360s161.2,360,360,360c188.7,0,343.4-145.2,358.7-330H689.3 C675,627,601.2,692,512.1,692z"
            ></path>
          </svg>
          Coinbase
        </div>
      </Button> */}
      <Button className="mb-2 py-2 text-sm relative" disabled>
        <div className="px-8">
          <svg
            height="25"
            viewBox="0 0 40 25"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 mobile:w-6 mobile:h-6  ml-2 mr-6 absolute left-0 top-1"
          >
            <path
              d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z"
              fill="currentColor"
            ></path>
          </svg>
          Wallet Connect
        </div>
      </Button>

      <div className="bg-white b-1 w-full h-[1px] my-4" />
      <div className="flex justify-center relative">
        <span className="text-xs text-center bg-[#c28669] px-2 absolute top-[-34px] italic">
          Connect with an email or social login
        </span>
      </div>
      <Button className="mb-2 py-2 text-sm relative" disabled>
        <div className="px-8">
          <img
            src="https://sequence.app/static/images/sequence-logo.7c854742a6b8b4969004.svg"
            className="w-7 h-7 mobile:w-6 mobile:h-6  ml-2 mr-6 absolute left-0 top-1"
          />
          Sequence
        </div>
      </Button>
    </div>
  );
};
