import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Intro({ restaurant }) {

  const [totalReview, setTotalReview] = useState();
  const [avgRating, setAvgRating] = useState();

  useEffect(() => {
    restaurant && calculateRating();
  }, [restaurant]);

  const calculateRating = () => {
    let total = 0;
    let count = 0;
    restaurant?.reviews?.forEach(item => {
      total = total + item.star;
      count++;
    });

    setTotalReview(count);
    const result = total / count;
    setAvgRating(result ? result.toFixed(1) : 0);

  };

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
        <label className="text-sm text-gray-500">{avgRating} ({totalReview})</label>
      </div>
      <h2 className="flex gap-2 text-gray-500 items-center mt-2">
        <MapPin /> {restaurant.address}
      </h2>
    </div>
  );
}

export default Intro;
