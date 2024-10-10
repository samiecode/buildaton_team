import Image from "next/image";
import { orbitron } from "../fonts";

const Onboard = () => {
  return (
    <div className="w-screen h-screen bg-black/20 flex justify-center items-center ">
      <div className="w-2/3 h-4/5 bg-white rounded-2xl shadow-lg px-8 py-12 overflow-hidden">
        <h1
          className={`${orbitron.className} text-4xl m-4 font-semibold w-full`}
        >
          What is a Wallet?
        </h1>
        <hr className="bg-black mx-4 border-black" />
        <div className="flex justify-between h-full items-center">
          {" "}
          <p className="w-[45ch] text-xl mt-10 p-10 bg-green-50">
            A wallet in the context of blockchain and cryptocurrencies is a
            digital tool that allows users to store, send, and receive digital
            assets, such as cryptocurrencies. It doesn't actually store the
            assets themselves but rather secures the private keys (cryptographic
            codes) that give you access to your funds on the blockchain.
          </p>
          <Image
            src={"/Images/onboard1.png"}
            alt="Onboard IMG"
            width={550}
            height={550}
            className="m-10"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};
export default Onboard;
