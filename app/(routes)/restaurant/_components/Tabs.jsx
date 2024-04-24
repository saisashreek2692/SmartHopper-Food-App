import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuSection from "./MenuSection";
import ReviewsSection from "./ReviewsSection";

function Tab({restaurant}) {
  return (
    <Tabs defaultValue="category" className="w-full mt-10">
      <TabsList>
        <TabsTrigger value="category">Category</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="category">
        <MenuSection restaurant={restaurant} />
      </TabsContent>
      <TabsContent value="about">This is restaurant about section</TabsContent>
      <TabsContent value="reviews">
        <ReviewsSection restaurant={restaurant} />
      </TabsContent>
    </Tabs>
  );
}

export default Tab;
