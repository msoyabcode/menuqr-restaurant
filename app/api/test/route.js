// API ka response bhejne ke liye NextResponse import karo
import { NextResponse } from "next/server";

// database connect karne wala function import karo (@ ka matlab project ka root)
import dbConnect from "@/lib/db";

// GET request aane par ye function chalega
export async function GET() {
  // pehle database se connect karo
  await dbConnect();

  // connect ho gaya to ye message JSON mein bhej do
  return NextResponse.json({ message: "DB connected" });
}