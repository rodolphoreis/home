"use client";

import { dataProperties } from "@/components/Properties/Properties.data";
import { createContext, useState, useMemo } from "react";

export interface PropertiesInterface {
  id: number;
  price: number;
  location: string;
  star: number;
  bedrooms: number;
  bathroom: number;
  meters: number;
  description: string;
  image: string;
}

interface ContextInterface {
  properties: PropertiesInterface[];
  filters: {
    location: string;
    star: [number, number];
    priceRange: [number, number];
  };
  setFilters: (filters: {
    location: string;
    star: [number, number];
    priceRange: [number, number];
  }) => void;
}

export const Context = createContext({} as ContextInterface);

export function PropertiesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, setFilters] = useState<{
    location: string;
    star: [number, number];
    priceRange: [number, number];
  }>({
    location: "",
    star: [0, 10],
    priceRange: [0, 1000000],
  });

  const filteredProperties = useMemo(() => {
    return dataProperties.filter((property) => {
      const matchesLocation =
        !filters.location || property.location.includes(filters.location);

      const matchesStar =
        property.star >= filters.star[0] && property.star <= filters.star[1];
      const matchesPrice =
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1];
      return matchesLocation && matchesPrice && matchesStar;
    });
  }, [filters]);

  return (
    <Context.Provider
      value={{ properties: filteredProperties, filters, setFilters }}
    >
      {children}
    </Context.Provider>
  );
}
