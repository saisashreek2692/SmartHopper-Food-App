/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Intro from '../_components/Intro';
import Tabs from '../_components/Tabs';

function RestaurantDetail() {

    const param = usePathname();
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        GetRestaurantDetail(param.split("/")[2]);
    }, []);

    const GetRestaurantDetail = (restroSlug) => {
        GlobalApi.GetBusinessDetail(restroSlug).then(resp => {
            console.log(resp);
            setRestaurant(resp.restaurant);
        })
    };

  return (
    <div className='mt-5'>
        <Intro restaurant={restaurant} />
        <Tabs restaurant={restaurant} />
    </div>
  )
}

export default RestaurantDetail