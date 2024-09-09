"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";

export const Homepage = () => {
  return (
    <div>
      <div>
        <Select
          className="max-w-full py-4"
          label="How many people are you cooking for?"
          labelPlacement="outside"
          placeholder="Choose..."
        >
          {siteConfig.People.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-full py-4"
          label="Whats your cooking style?"
          labelPlacement="outside"
          placeholder="Choose..."
        >
          {siteConfig.Cooking.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-full py-4"
          label="Choose your favorite cuisine?"
          labelPlacement="outside"
          placeholder="Choose..."
        >
          {siteConfig.FavoriteCuisine.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex justify-center">
        <Button className="px-8 py-3 bg-lime-500 text-white">
          Generate plan
        </Button>
      </div>
    </div>
  );
};
