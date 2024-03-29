function Header() {
  return (
    <div className="w-full flex py-5">
      <div className="flex w-full mx-5 items-center justify-between border-b-green-500">
        <div>
          <h1 className="text-xl lg:text-3xl md:text-2xl py-2 px-2 text-white">
            CORE <span className="text-green-500"> 11</span>
          </h1>
        </div>
        <div>
          <button className="bg-white hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
