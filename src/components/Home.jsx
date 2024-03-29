import React from "react";
import HomePng from "../assets/homepng.jpg";
function Home() {
  return (
    <div className="flex items-center h-screen mb-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-lg lg:text-3xl text-green-500 font-bold">
          Welcome to the Core 11
        </h1>
        <p className="text-white text-xl max-w-[650px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          bibendum felis, rutrum molestie tortor. Mauris consequat arcu id
          faucibus porttitor. Maecenas blandit ante varius purus faucibus
          mollis. Nam sollicitudin scelerisque est, vitae finibus velit aliquet
          at. Quisque ullamcorper quis nibh in vehicula.
        </p>
      </div>
      <div>
        <img src={HomePng} className="w-[600px]" />
      </div>
    </div>
  );
}

export default Home;
