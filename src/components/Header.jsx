function Header() {
  return (
    <div className="w-full border-2 mt-3 static flex top-1 py-5 rounded-xl bg-gradient-to-r from-red-500 to-black">
      <div className="flex w-full mx-5 items-center justify-between">
        <div>
          <h1 className="text-xl py-2 px-2 text-white">CORE 11</h1>
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
