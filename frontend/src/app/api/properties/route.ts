import { NextResponse } from "next/server";
import { getAllProperties } from "@/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location") || "";
  const type = searchParams.get("type") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const bedrooms = searchParams.get("bedrooms") || "";
  const sort = searchParams.get("sort") || "newest";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "30", 10);

  let properties = getAllProperties();

  // Filter by location
  if (location) {
    properties = properties.filter((p) =>
      p.location.toLowerCase().includes(location.toLowerCase()),
    );
  }

  // Filter by type
  if (type && type !== "All") {
    properties = properties.filter((p) => p.type === type);
  }

  // Filter by bedrooms
  if (bedrooms && bedrooms !== "Any") {
    const min = parseInt(bedrooms, 10);
    if (!isNaN(min)) {
      properties = properties.filter((p) => p.bedrooms >= min);
    }
  }

  // Filter by price
  if (minPrice) {
    const min = parseInt(minPrice, 10);
    if (!isNaN(min)) properties = properties.filter((p) => p.price >= min);
  }
  if (maxPrice) {
    const max = parseInt(maxPrice, 10);
    if (!isNaN(max)) properties = properties.filter((p) => p.price <= max);
  }

  // Sort
  if (sort === "price_low") {
    properties.sort((a, b) => a.price - b.price);
  } else if (sort === "price_high") {
    properties.sort((a, b) => b.price - a.price);
  } else {
    // newest (by id desc)
    properties.sort((a, b) => Number(b.id) - Number(a.id));
  }

  const total = properties.length;
  const start = (page - 1) * limit;
  const paginated = properties.slice(start, start + limit);

  return NextResponse.json({
    properties: paginated,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  });
}
