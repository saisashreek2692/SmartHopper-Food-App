import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

function Intro({ restaurant }) {
  return (
    <div>
      {restaurant?.banner?.url ? (
        <div>
          <Image
            src={restaurant?.banner?.url}
            alt={restaurant.name}
            width={1000}
            height={300}
            className="w-full h-[220px] object-cover rounded-xl"
          />
        </div>
      ) : (
        <div className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"></div>
      )}
      <h2 className="text-3xl font-bold mt-2">{restaurant.name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <Image src={"/star.png"} alt="star" width={20} height={20} priority={true} />
        <label className="text-sm text-gray-500">4.5 (56)</label>
      </div>
      <h2 className="flex gap-2 text-gray-500 items-center mt-2">
        <MapPin /> {restaurant.address}
      </h2>
    </div>
  );
}

export default Intro;
